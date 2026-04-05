export type RiskItem = {
  title: string;
  severity: 'Critical' | 'High' | 'Medium';
  symptom: string;
  consequence: string;
};

export const heroStats = [
  { label: 'Attribution Confidence', value: 96, suffix: '%' },
  { label: 'Core SOPs Handed Off', value: 18, suffix: '+' },
  { label: 'Pilot Validation Window', value: 90, suffix: ' Days' }
];

export const riskItems: RiskItem[] = [
  {
    title: 'Paid Traffic Dependency',
    severity: 'Critical',
    symptom: '70%+ orders tied to a single paid channel.',
    consequence: 'Policy changes or CPM spikes can collapse weekly cashflow.'
  },
  {
    title: 'Distorted Reporting',
    severity: 'High',
    symptom: 'Platform ROAS cannot reconcile with finance net profit.',
    consequence: 'Budget decisions reward false efficiency and hide loss centers.'
  },
  {
    title: 'Attribution Chaos',
    severity: 'High',
    symptom: 'Pixel and server-side signals disagree; UTM tags are inconsistent.',
    consequence: 'No trustworthy path from click to contribution profit.'
  },
  {
    title: 'No Owned Customer Assets',
    severity: 'High',
    symptom: 'Repeat purchase and segmentation data are fragmented.',
    consequence: 'LTV growth stalls and every quarter restarts from zero.'
  },
  {
    title: 'Intuition-led Decisions',
    severity: 'Medium',
    symptom: 'Experiments are ad hoc, undocumented, and not reusable.',
    consequence: 'Team capacity scales, but strategic certainty does not.'
  },
  {
    title: 'Unscalable Growth Loop',
    severity: 'Critical',
    symptom: 'SKU investment and creative throughput lack testing discipline.',
    consequence: 'Budget expands faster than validated growth mechanisms.'
  }
];

export const architecturePoints = [
  'Attribution audit across Meta, TikTok, Google, Amazon, Shopify and finance truth.',
  'Data infrastructure rebuild with GTM/UTM standards and Pixel vs S2S discrepancy checks.',
  'Industrialized test system: SKU script matrix, creative A/B cycles, channel ROI comparison.',
  'Owned asset accumulation via user tagging, retention architecture, and BI command visibility.',
  'SOP and operating model handoff so execution capability remains inside your team.'
];

export const deliverables = [
  'Multi-platform Data Cleaning Report',
  'GTM / UTM Governance System',
  'Pixel vs S2S Discrepancy Report',
  'Dummy Site Attribution Validation',
  'Brand Content Strategy Blueprint',
  'SKU Script Matrix Library',
  'High-ROI Advertising Playbook',
  'High-Potential & High-Margin SKU Strategy',
  'Dynamic Budget Allocation Model',
  'BI Growth Dashboard Blueprint',
  'Omni-channel SOP Manual'
];

export const fitProfiles = [
  'Cross-border brands spending meaningfully on paid acquisition but lacking reliable growth certainty.',
  'Founders and C-level operators who want to replace agency dependency with internal decision control.',
  'Growth teams with unstable ROAS, inconsistent creative testing, and weak data governance.',
  'Organizations upgrading from media-buying execution to repeatable operating systems.'
];

export const comparisonRows = [
  ['What you buy', 'Media spend execution', 'Decision certainty + system capability'],
  ['Data logic', 'Platform-centric reports', 'Finance-reconciled business truth'],
  ['Execution model', 'Outsourced labor', 'Transferable internal operating assets'],
  ['Performance horizon', 'Short-cycle fluctuation', 'Compounding control over 4-8 quarters'],
  ['Team effect', 'Dependency on account managers', 'Cross-functional growth command structure']
];
