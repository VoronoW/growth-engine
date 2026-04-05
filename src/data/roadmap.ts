export type Phase = {
  id: string;
  title: string;
  month: string;
  goal: string;
  actions: string[];
  deliverables: string[];
  solvedProblem: string;
  departments: string[];
  result: string;
};

export const phases: Phase[] = [
  {
    id: 'phase-1',
    title: 'Data Truth Audit & Infrastructure Rebuild',
    month: 'Month 1',
    goal: 'Reconstruct trusted growth data so every budget decision is traceable to business outcomes.',
    actions: [
      'Export and clean historical data from Meta, TikTok, Google, Amazon, and Shopify.',
      'Deploy GTM/UTM taxonomy and traffic identity rules.',
      'Run Pixel vs Server-side discrepancy diagnostics.',
      'Execute dummy-site attribution tests for path integrity.',
      'Build SKU-level monitoring baseline for 30-50 core SKUs.'
    ],
    deliverables: [
      'Data cleaning report',
      'GTM / UTM architecture',
      'Attribution discrepancy report',
      'Growth data foundation'
    ],
    solvedProblem: 'Eliminates reporting distortion and false ROAS confidence.',
    departments: ['Growth', 'Data', 'Performance Marketing', 'Finance'],
    result: 'A single source of growth truth with auditable attribution.'
  },
  {
    id: 'phase-2',
    title: 'Growth Strategy MVP Saturation Attack',
    month: 'Month 2',
    goal: 'Identify repeatable growth mechanics through structured experimentation and SKU prioritization.',
    actions: [
      'Build SKU script matrix by pain point, scenario, proof, and value framing.',
      'Launch creative A/B testing cycles with controlled variables.',
      'Design brand content strategy and high-ROI ad structures.',
      'Segment high-potential and high-margin SKU paths.',
      'Run user-tagging analysis and first-1000-user profiling.'
    ],
    deliverables: [
      'SKU script matrix',
      'Creative testing report',
      'High-ROI ad playbook',
      'Growth MVP insights'
    ],
    solvedProblem: 'Replaces intuition-driven media decisions with validated test evidence.',
    departments: ['Growth', 'Creative', 'Media Buying', 'Product'],
    result: 'A validated strategy MVP with clear scale/no-scale rules.'
  },
  {
    id: 'phase-3',
    title: 'Systemization & Command Handoff',
    month: 'Month 3',
    goal: 'Transfer proven growth capability into your organization as documented, reusable systems.',
    actions: [
      'Finalize dynamic budget allocation and stop-loss governance.',
      'Deploy BI growth command dashboard with KPI and anomaly views.',
      'Complete omni-channel SOP and SKU dynamic pricing mechanisms.',
      'Set annual strategy rhythm and cross-functional review cadence.',
      'Deliver team training and operating handoff workshops.'
    ],
    deliverables: [
      'Dynamic budget model',
      'BI command dashboard',
      'Omni-channel SOP manual',
      'System handoff package'
    ],
    solvedProblem: 'Ends dependency on external operators and one-person heroics.',
    departments: ['Leadership', 'Growth', 'Ops', 'Data', 'Finance'],
    result: 'An internal growth operating system that compounds over time.'
  }
];
