import { Link } from 'react-router-dom';
import IntakeForm from '../components/IntakeForm';

const OnboardingForm = () => (
  <div className="page-shell onboarding-page">
    <header className="top-nav">
      <strong>30-Day Client Onboarding</strong>
      <Link to="/" className="btn ghost">
        Return to Main Site
      </Link>
    </header>

    <main>
      <section className="panel onboarding-intro reveal-on-scroll is-visible">
        <p className="eyebrow">Diagnostics Intake</p>
        <h1>Operational onboarding for month-1 growth system reconstruction</h1>
        <p>
          Complete this form to align data access, channel structure, team ownership, and 90-day outcomes before
          kickoff.
        </p>
      </section>

      <IntakeForm />

      <section className="panel integration-note">
        <h3>Integration architecture</h3>
        <p>
          Endpoint and provider are configurable in <code>src/config/formIntegration.ts</code>. Current default uses
          Formspree. Web3Forms, Google Forms, and Notion embed patterns are documented in README.
        </p>
      </section>
    </main>
  </div>
);

export default OnboardingForm;
