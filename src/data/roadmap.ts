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
    title: '数据真值重构',
    month: '第1月',
    goal: '建立可信增长底盘，让每笔预算都能追溯到真实经营结果。',
    actions: [
      '清洗多平台历史数据并统一经营口径。',
      '重构流量标记规范与归因规则。',
      '校验客户端与服务端回传偏差。',
      '通过影子站验证核心归因链路。',
      '建立核心商品监控基线。'
    ],
    deliverables: ['数据清洗报告', '流量标记架构', '归因偏差报告', '增长数据底盘'],
    solvedProblem: '解决报表失真与预算误判。',
    departments: ['增长团队', '数据团队', '投放团队', '财务团队'],
    result: '形成统一、可审计、可复盘的数据真值体系。'
  },
  {
    id: 'phase-2',
    title: '增长模型重构',
    month: '第2月',
    goal: '用结构化实验找到可复制的增长执行路径。',
    actions: [
      '建立商品脚本矩阵并推进素材对照实验。',
      '重构内容策略与高回报投放结构。',
      '划分高潜力与高毛利商品路径。',
      '建立首批用户标签与画像分层。',
      '沉淀增长假设与验证结果闭环。'
    ],
    deliverables: ['商品脚本矩阵', '创意测试报告', '高回报投放手册', '增长模型验证结论'],
    solvedProblem: '解决依赖经验的投放与内容决策。',
    departments: ['增长团队', '内容团队', '投放团队', '产品团队'],
    result: '形成可规模化执行的增长策略原型。'
  },
  {
    id: 'phase-3',
    title: '组织机制重构',
    month: '第3月',
    goal: '将验证有效的方法固化为企业可接管的增长系统。',
    actions: [
      '建立动态预算分配与止损机制。',
      '搭建增长指挥舱看板与异常预警。',
      '沉淀全渠道标准流程与商品策略机制。',
      '建立年度复盘节奏与跨部门协同机制。',
      '完成培训与增长系统交接。'
    ],
    deliverables: ['动态预算模型', '增长指挥舱看板', '全渠道标准流程手册', '系统交接包'],
    solvedProblem: '解决对个人与外部操盘的长期依赖。',
    departments: ['管理层', '增长团队', '运营团队', '数据团队', '财务团队'],
    result: '完成增长系统重构并具备持续复利能力。'
  }
];
