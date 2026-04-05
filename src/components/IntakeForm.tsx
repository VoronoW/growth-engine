import { FormEvent, useMemo, useState } from 'react';
import { formIntegration } from '../config/formIntegration';
import { onboardingSteps } from '../data/onboardingSteps';

type FormState = Record<string, string>;

const IntakeForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formState, setFormState] = useState<FormState>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const step = onboardingSteps[stepIndex];
  const progress = useMemo(() => ((stepIndex + 1) / onboardingSteps.length) * 100, [stepIndex]);

  const validateStep = () => {
    const stepErrors: Record<string, string> = {};
    step.fields.forEach((field) => {
      if (field.required && !formState[field.name]?.trim()) {
        stepErrors[field.name] = 'This field is required.';
      }
      if (field.type === 'email' && formState[field.name] && !/.+@.+\..+/.test(formState[field.name])) {
        stepErrors[field.name] = 'Enter a valid email address.';
      }
    });
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStepIndex((prev) => Math.min(prev + 1, onboardingSteps.length - 1));
  };

  const prevStep = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const serializePayload = () => {
    if (formIntegration.provider === 'web3forms') {
      return {
        ...formState,
        access_key: formIntegration.web3formsAccessKey,
        subject: '30-Day Growth OS Onboarding Form'
      };
    }
    return formState;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateStep()) return;
    setSubmitStatus('submitting');

    try {
      const endpoint = formIntegration.endpoints[formIntegration.provider];
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serializePayload())
      });

      if (!response.ok) throw new Error('Submission failed');
      setSubmitStatus('success');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
  };

  const renderField = (field: (typeof step.fields)[number]) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formState[field.name] ?? '',
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        handleChange(field.name, e.target.value)
    };

    if (field.type === 'textarea') return <textarea {...commonProps} rows={4} placeholder={field.placeholder} />;
    if (field.type === 'select') {
      return (
        <select {...commonProps}>
          <option value="">Select an option</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
    if (field.type === 'multiselect') {
      return (
        <input
          {...commonProps}
          type="text"
          placeholder={`Select multiple: ${field.options?.join(' / ')}`}
          aria-label={field.label}
        />
      );
    }

    return <input {...commonProps} type={field.type} placeholder={field.placeholder} />;
  };

  if (submitStatus === 'success') {
    return (
      <div className="form-success panel">
        <h2>Submission Received</h2>
        <p>
          Your onboarding diagnostic has been recorded. The consulting team will verify access, align priorities,
          and return your month-1 kickoff checklist within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="intake-form panel">
      <div className="progress-wrap">
        <p>
          Step {stepIndex + 1} / {onboardingSteps.length}
        </p>
        <div className="progress-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <header>
        <h2>{step.title}</h2>
        <p>{step.description}</p>
      </header>

      <div className="form-grid">
        {step.fields.map((field) => (
          <label key={field.name} htmlFor={field.name} className="form-field">
            <span>
              {field.label}
              {field.required ? ' *' : ''}
            </span>
            {renderField(field)}
            {errors[field.name] && <em>{errors[field.name]}</em>}
          </label>
        ))}
      </div>

      <footer className="form-actions">
        <button type="button" className="btn ghost" onClick={prevStep} disabled={stepIndex === 0}>
          Previous
        </button>
        {stepIndex < onboardingSteps.length - 1 ? (
          <button type="button" className="btn primary" onClick={nextStep}>
            Continue
          </button>
        ) : (
          <button type="submit" className="btn primary" disabled={submitStatus === 'submitting'}>
            {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Onboarding'}
          </button>
        )}
      </footer>

      {submitStatus === 'error' && (
        <p className="error-note">Submission failed. Confirm your provider endpoint in src/config/formIntegration.ts.</p>
      )}
    </form>
  );
};

export default IntakeForm;
