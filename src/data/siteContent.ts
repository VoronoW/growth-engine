export type RiskItem = {
  title: string;
  severity: 'Critical' | 'High' | 'Medium';
  symptom: string;
  consequence: string;
};

export const heroStats = [
  { label: '归因可信度', value: 96, suffix: '%' },
  { label: '可移交系统资产', value: 18, suffix: '+' },
  { label: '重构周期', value: 90, suffix: '天' }
];

export const riskItems: RiskItem[] = [
  {
    title: '付费流量单点依赖',
    severity: 'Critical',
    symptom: '核心订单长期依赖单一付费渠道。',
    consequence: '一旦平台成本上行，利润与现金流会同步承压。'
  },
  {
    title: '经营报表口径失真',
    severity: 'High',
    symptom: '投放口径与财务口径持续偏离。',
    consequence: '预算被错误配置，增长判断失去可信基础。'
  },
  {
    title: '归因链路断裂',
    severity: 'High',
    symptom: '客户端与服务端回传不一致，流量标记缺失治理。',
    consequence: '无法判断真实转化来源，执行路径难以优化。'
  },
  {
    title: '用户资产沉淀不足',
    severity: 'High',
    symptom: '复购、标签、分层未形成统一资产体系。',
    consequence: '增长持续依赖买量，生命周期价值难以提升。'
  },
  {
    title: '决策机制经验化',
    severity: 'Medium',
    symptom: '实验机制缺标准、缺复盘、缺沉淀。',
    consequence: '组织规模增长，但系统能力没有同步放大。'
  },
  {
    title: '增长模型不可复制',
    severity: 'Critical',
    symptom: '商品策略、素材策略、预算策略缺少统一框架。',
    consequence: '扩量速度超过验证速度，经营风险被放大。'
  }
];

export const architecturePoints = [
  '增长诊断先行：统一投放数据、经营数据与财务真值口径。',
  '数据底盘重构：建立全链路流量标记与归因治理标准。',
  '实验系统重构：商品脚本矩阵、素材对照机制与渠道回报率协同验证。',
  '资产体系重构：构建用户标签、留存策略与增长指挥舱视图。',
  '组织能力重构：以标准流程与交接机制固化执行路径。'
];

export const deliverables = [
  '全域数据真值核验报告',
  '流量标记治理体系',
  '客户端与服务端回传偏差报告',
  '影子站归因验证报告',
  '品牌内容策略蓝图',
  '商品脚本矩阵库',
  '高回报投放作战手册',
  '高潜力高毛利商品策略',
  '动态预算分配模型',
  '增长指挥舱看板蓝图',
  '全渠道标准作业手册'
];

export const fitProfiles = [
  '已有投放规模，但缺少可验证增长系统的跨境品牌团队。',
  '希望拿回经营决策权、摆脱外部依赖的管理层。',
  '投产比波动明显、测试效率偏低、组织协同断层的增长团队。',
  '准备从执行导向升级到系统导向的企业。'
];

export const comparisonRows = [
  ['采购对象', '渠道执行能力', '增长系统能力'],
  ['数据口径', '平台报表口径', '经营真值口径'],
  ['交付形态', '外包协作结果', '可移交系统资产'],
  ['结果周期', '短期波动收益', '中长期复利能力'],
  ['组织影响', '依赖个人经验', '形成增长指挥舱机制']
];
