import { Link } from 'react-router-dom';
import KpiStrip from '../components/KpiStrip';
import RoadmapTabs from '../components/RoadmapTabs';
import SectionHeader from '../components/SectionHeader';
import useReveal from '../hooks/useReveal';
import {
  architecturePoints,
  comparisonRows,
  deliverables,
  fitProfiles,
  riskItems
} from '../data/siteContent';

const severityLabel = {
  Critical: '一级风险',
  High: '二级风险',
  Medium: '三级风险'
};

const Home = () => {
  useReveal();

  return (
    <div className="page-shell">
      <header className="top-nav">
        <strong>增长引擎验证舱</strong>
        <nav>
          <a href="#diagnostic">增长诊断</a>
          <a href="#roadmap">执行路径</a>
          <a href="#deliverables">交付资产</a>
          <Link to="/onboarding">入舱诊断表</Link>
        </nav>
      </header>

      <main>
        <section className="hero panel">
          <p className="eyebrow">品牌出海加速器｜增长引擎验证舱（90天）</p>
          <h1>当买量红利衰减，企业需要的是增长系统重构。</h1>
          <p className="hero-sub">90天完成数据真值校准、模型验证与组织交接，让增长从渠道依赖转向系统驱动。</p>
          <p className="hero-positioning">这不是代投协作，而是增长指挥舱级别的经营能力升级。</p>
          <div className="hero-cta">
            <a href="#cta" className="btn primary">
              立即发起增长诊断
            </a>
            <Link to="/onboarding" className="btn ghost">
              进入30天入舱流程
            </Link>
          </div>
        </section>

        <KpiStrip />

        <section id="diagnostic">
          <SectionHeader
            eyebrow="核心增长诊断"
            title="投产比波动只是表象，系统断层才是根因"
            description="以症状—后果双视角识别经营风险，优先锁定影响利润与决策质量的关键断点。"
          />
          <div className="risk-grid">
            {riskItems.map((item) => (
              <article key={item.title} className="risk-card reveal-on-scroll">
                <p className={`severity ${item.severity.toLowerCase()}`}>{severityLabel[item.severity]}</p>
                <h3>{item.title}</h3>
                <p>
                  <span>风险信号</span> {item.symptom}
                </p>
                <p>
                  <span>经营后果</span> {item.consequence}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="重构方案"
            title="围绕增长系统重构的90天方法论"
            description="以数据基础设施、实验机制与组织协同三条主线，建立可复制的增长指挥舱能力。"
          />
          <div className="architecture-list panel reveal-on-scroll">
            {architecturePoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </section>

        <section id="roadmap">
          <SectionHeader
            eyebrow="90天执行路径"
            title="从真值校准到系统交接的三阶段推进"
            description="每个阶段均包含阶段目标、关键动作、部门协同与业务结果，确保重构可落地。"
          />
          <RoadmapTabs />
        </section>

        <section id="deliverables">
          <SectionHeader
            eyebrow="交付资产库"
            title="交付的不只是结果，而是可接管的增长系统"
            description="所有成果均以可复用资产交付，支持团队长期执行、复盘与持续迭代。"
          />
          <div className="deliverables-grid">
            {deliverables.map((item) => (
              <article key={item} className="deliverable-card reveal-on-scroll">
                <h3>{item}</h3>
                <p>可直接纳入内部增长指挥舱，形成持续控制力。</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="适配对象"
            title="适合以系统化方式重构增长能力的团队"
            description="面向跨境经营管理层与增长负责人，尤其适合由执行导向向系统导向升级的组织。"
          />
          <div className="fit-list panel reveal-on-scroll">
            <ul>
              {fitProfiles.map((profile) => (
                <li key={profile}>{profile}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="模式对比"
            title="传统代运营模式 对比 增长系统重构模式"
            description="从采购执行人力，转向构建企业自己的增长系统与决策机制。"
          />
          <div className="comparison-table panel reveal-on-scroll">
            {comparisonRows.map(([label, agency, system]) => (
              <div key={label} className="comparison-row">
                <p>{label}</p>
                <p>{agency}</p>
                <p>{system}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="value-frame panel reveal-on-scroll">
          <h2>价值主张</h2>
          <p>以少量重构投入，保护大规模投放预算；先验证执行路径，再进行规模扩张。</p>
          <p>采购的是经营真值、组织结构与增长确定性，而非短期流量执行。</p>
        </section>

        <section id="cta" className="final-cta panel reveal-on-scroll">
          <h2>即刻进入增长系统重构</h2>
          <p>选择你的启动动作，我们将基于现状输出对应的增长诊断与执行路径建议。</p>
          <div className="hero-cta">
            <a className="btn primary" href="mailto:advisor@growthengine.example">
              锁定顾问诊断席位
            </a>
            <Link className="btn ghost" to="/onboarding">
              提交重构需求
            </Link>
            <a className="btn ghost" href="mailto:advisor@growthengine.example?subject=申请增长系统方案概览">
              申请方案概览
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>品牌出海加速器｜增长引擎验证舱（90天）</p>
        <p>咨询邮箱：advisor@growthengine.example · 领英 · 微信 · 支持静态站点部署</p>
      </footer>
    </div>
  );
};

export default Home;
