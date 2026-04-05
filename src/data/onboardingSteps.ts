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
    title: '企业基本盘',
    description: '明确项目归属、决策窗口与沟通机制。',
    fields: [
      { name: 'companyName', label: '企业主体 / 品牌名称', type: 'text', required: true },
      { name: 'website', label: '官网或店铺链接', type: 'text', required: true },
      { name: 'primaryContact', label: '项目负责人（姓名与角色）', type: 'text', required: true },
      { name: 'contactEmail', label: '负责人邮箱', type: 'email', required: true }
    ]
  },
  {
    id: 'revenue-mix',
    title: '营收与渠道结构',
    description: '识别收入来源与渠道集中风险。',
    fields: [
      {
        name: 'monthlyRevenue',
        label: '月均营收（美元）',
        type: 'select',
        required: true,
        options: ['低于10万', '10万-30万', '30万-100万', '100万-300万', '300万以上']
      },
      {
        name: 'primaryChannels',
        label: '核心销售渠道',
        type: 'multiselect',
        required: true,
        options: ['独立站', '平台店铺', '内容电商渠道', '线下/分销', '其他']
      },
      {
        name: 'paidTrafficShare',
        label: '付费流量占比（%）',
        type: 'number',
        required: true
      }
    ]
  },
  {
    id: 'ads-attribution',
    title: '投放与归因状态',
    description: '评估当前信号质量与投放机制成熟度。',
    fields: [
      {
        name: 'adPlatforms',
        label: '当前投放平台',
        type: 'multiselect',
        required: true,
        options: ['社交媒体广告', '短视频广告', '搜索广告', '平台店铺广告', '其他']
      },
      {
        name: 'attributionMaturity',
        label: '归因体系成熟度',
        type: 'select',
        required: true,
        options: ['尚未建立流量标记规范', '部分打标', '打标 + 看板', '含服务端回传的高级体系']
      },
      { name: 'roasGap', label: '投产比与财务结果偏差（如已知）', type: 'text' }
    ]
  },
  {
    id: 'sku-structure',
    title: '商品结构',
    description: '核验引流款、利润款与长尾款分层逻辑。',
    fields: [
      { name: 'activeSkus', label: '在售商品数量', type: 'number', required: true },
      {
        name: 'skuClassification',
        label: '商品分层机制现状',
        type: 'select',
        required: true,
        options: ['已体系化并有文档', '部分执行', '尚未建立']
      },
      { name: 'topSkuRevenueShare', label: '前20%商品营收占比（%）', type: 'number', required: true }
    ]
  },
  {
    id: 'content-production',
    title: '内容与创意体系',
    description: '评估创意产能与测试效率是否支持规模化。',
    fields: [
      { name: 'monthlyCreatives', label: '每月新增创意数量', type: 'number', required: true },
      {
        name: 'scriptFramework',
        label: '脚本矩阵机制现状（痛点/场景/证据）',
        type: 'select',
        required: true,
        options: ['已形成标准机制', '部分使用', '尚未建立']
      },
      { name: 'creativeWorkflow', label: '当前创意协同流程说明', type: 'textarea' }
    ]
  },
  {
    id: 'team-structure',
    title: '团队与决策机制',
    description: '确认职责边界、复盘节奏与跨部门协同链路。',
    fields: [
      { name: 'teamSize', label: '增长相关团队规模', type: 'number', required: true },
      {
        name: 'decisionCadence',
        label: '数据复盘节奏',
        type: 'select',
        required: true,
        options: ['每日', '每周', '双周', '按需触发']
      },
      {
        name: 'sopStatus',
        label: '标准流程文档完备度',
        type: 'select',
        required: true,
        options: ['完整', '部分', '较少', '暂无']
      }
    ]
  },
  {
    id: 'ninety-day-goals',
    title: '90天目标',
    description: '定义重构阶段的结果目标与经营阈值。',
    fields: [
      { name: 'primaryGoal', label: '阶段首要目标', type: 'text', required: true },
      { name: 'kpiTargets', label: '关键指标目标（投产比/获客成本/转化率/生命周期价值）', type: 'textarea', required: true },
      { name: 'budgetWindow', label: '未来90天预算窗口（美元）', type: 'text', required: true }
    ]
  },
  {
    id: 'access-checklist',
    title: '权限与资产清单',
    description: '确保增长诊断与重构执行所需权限已就绪。',
    fields: [
      {
        name: 'accessReady',
        label: '当前可开放权限',
        type: 'multiselect',
        required: true,
        options: ['广告账户', '分析工具', '店铺后台', '用户管理 / 邮件工具', '数据仓库 / 看板']
      },
      { name: 'assetLinks', label: '数据、素材、流程资料链接', type: 'textarea', required: true }
    ]
  },
  {
    id: 'priority-expectations',
    title: '优先问题与预期',
    description: '对齐关键风险、紧急程度与管理层成功定义。',
    fields: [
      { name: 'topRisks', label: '当前最关键的三项增长风险', type: 'textarea', required: true },
      {
        name: 'urgencyLevel',
        label: '问题紧急程度',
        type: 'select',
        required: true,
        options: ['高紧急（30天内）', '高优先（本季度内）', '战略级（6个月内）']
      },
      { name: 'successDefinition', label: '管理层对项目成功的定义', type: 'textarea', required: true }
    ]
  }
];
