export type FieldType = 'text' | 'email' | 'number' | 'textarea' | 'select' | 'multiselect';

export type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
};

export type FormStep = {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
};

export const onboardingSteps: FormStep[] = [
  {
    id: 'company-profile',
    title: 'Company Profile',
    description: 'Business fundamentals required for onboarding alignment.',
    fields: [
      { name: 'companyName', label: 'Company legal / brand name', type: 'text', required: true },
      { name: 'website', label: 'Primary website / store URL', type: 'text', required: true },
      { name: 'primaryContact', label: 'Project owner (name + title)', type: 'text', required: true },
      { name: 'contactEmail', label: 'Project owner email', type: 'email', required: true }
    ]
  },
  {
    id: 'revenue-mix',
    title: 'Revenue & Channel Mix',
    description: 'Current revenue composition and channel concentration risk.',
    fields: [
      {
        name: 'monthlyRevenue',
        label: 'Average monthly revenue (USD)',
        type: 'select',
        required: true,
        options: ['<100k', '100k-300k', '300k-1M', '1M-3M', '3M+']
      },
      {
        name: 'primaryChannels',
        label: 'Primary sales channels',
        type: 'multiselect',
        required: true,
        options: ['Shopify DTC', 'Amazon', 'TikTok Shop', 'Retail / Wholesale', 'Other']
      },
      {
        name: 'paidTrafficShare',
        label: 'Estimated paid traffic share (%)',
        type: 'number',
        required: true
      }
    ]
  },
  {
    id: 'ads-attribution',
    title: 'Advertising & Attribution Status',
    description: 'Audit your current signal reliability and media execution discipline.',
    fields: [
      {
        name: 'adPlatforms',
        label: 'Active ad platforms',
        type: 'multiselect',
        required: true,
        options: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Amazon Ads', 'Other']
      },
      {
        name: 'attributionMaturity',
        label: 'Attribution maturity level',
        type: 'select',
        required: true,
        options: ['No GTM/UTM standard', 'Partial tagging', 'Tagging + dashboard', 'Advanced with S2S']
      },
      { name: 'roasGap', label: 'ROAS gap vs finance reality (if known)', type: 'text' }
    ]
  },
  {
    id: 'sku-structure',
    title: 'SKU & Product Structure',
    description: 'Map traffic SKUs, profit SKUs, and lifecycle status.',
    fields: [
      { name: 'activeSkus', label: 'Active SKU count', type: 'number', required: true },
      {
        name: 'skuClassification',
        label: 'Do you classify SKUs by traffic / profit / long-tail?',
        type: 'select',
        required: true,
        options: ['Yes - documented', 'Partial', 'No']
      },
      { name: 'topSkuRevenueShare', label: 'Revenue share of top 20% SKUs (%)', type: 'number', required: true }
    ]
  },
  {
    id: 'content-production',
    title: 'Content & Creative Production',
    description: 'Assess creative throughput and testing readiness.',
    fields: [
      { name: 'monthlyCreatives', label: 'New creatives produced per month', type: 'number', required: true },
      {
        name: 'scriptFramework',
        label: 'Do you use a script matrix (pain point, scenario, proof)?',
        type: 'select',
        required: true,
        options: ['Yes - systematic', 'Partial', 'No']
      },
      { name: 'creativeWorkflow', label: 'Current creative workflow notes', type: 'textarea' }
    ]
  },
  {
    id: 'team-structure',
    title: 'Team & Decision Structure',
    description: 'Clarify ownership, cadence, and cross-functional governance.',
    fields: [
      { name: 'teamSize', label: 'Growth-related team size', type: 'number', required: true },
      {
        name: 'decisionCadence',
        label: 'Data review cadence',
        type: 'select',
        required: true,
        options: ['Daily', 'Weekly', 'Bi-weekly', 'Ad hoc']
      },
      {
        name: 'sopStatus',
        label: 'SOP documentation status',
        type: 'select',
        required: true,
        options: ['Comprehensive', 'Partial', 'Minimal', 'None']
      }
    ]
  },
  {
    id: 'ninety-day-goals',
    title: '90-Day Business Goals',
    description: 'Define measurable outcomes expected from this reconstruction window.',
    fields: [
      { name: 'primaryGoal', label: 'Primary 90-day target', type: 'text', required: true },
      { name: 'kpiTargets', label: 'KPI targets (ROAS/CAC/CVR/LTV etc.)', type: 'textarea', required: true },
      { name: 'budgetWindow', label: 'Planned media budget for next 90 days (USD)', type: 'text', required: true }
    ]
  },
  {
    id: 'access-checklist',
    title: 'Access Checklist & Assets',
    description: 'Prepare permissions for diagnostics and implementation.',
    fields: [
      {
        name: 'accessReady',
        label: 'Access currently available',
        type: 'multiselect',
        required: true,
        options: ['Ad accounts', 'Analytics tools', 'Shopify/Amazon backend', 'CRM / Email tools', 'Data warehouse / BI']
      },
      { name: 'assetLinks', label: 'Folder links for data, creatives, SOP files', type: 'textarea', required: true }
    ]
  },
  {
    id: 'priority-expectations',
    title: 'Priority Problems & Expectations',
    description: 'Capture urgency, risk, and executive expectations.',
    fields: [
      { name: 'topRisks', label: 'Top 3 current growth risks', type: 'textarea', required: true },
      {
        name: 'urgencyLevel',
        label: 'Urgency level',
        type: 'select',
        required: true,
        options: ['Critical (within 30 days)', 'High (within quarter)', 'Strategic (within 6 months)']
      },
      { name: 'successDefinition', label: 'How leadership defines project success', type: 'textarea', required: true }
    ]
  }
];
