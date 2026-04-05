export type IntegrationProvider = 'formspree' | 'web3forms' | 'googleForms' | 'notionEmbed';

export const formIntegration = {
  provider: 'formspree' as IntegrationProvider,
  endpoints: {
    formspree: 'https://formspree.io/f/your-form-id',
    web3forms: 'https://api.web3forms.com/submit',
    googleForms: 'https://docs.google.com/forms/d/e/your-form-id/formResponse',
    notionEmbed: 'https://your-notion-form-embed-url'
  },
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY'
};
