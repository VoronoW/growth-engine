import { Link } from 'react-router-dom';
import IntakeForm from '../components/IntakeForm';

const OnboardingForm = () => (
  <div className="page-shell onboarding-page">
    <header className="top-nav">
      <strong>30天入舱增长诊断</strong>
      <Link to="/" className="btn ghost">
        返回增长指挥舱主页
      </Link>
    </header>

    <main>
      <section className="panel onboarding-intro reveal-on-scroll is-visible">
        <p className="eyebrow">入舱前置采集</p>
        <h1>用于增长系统重构启动的核心信息清单</h1>
        <p>该诊断表将直接影响第1月执行路径设计，请确保数据、权限与目标口径完整一致。</p>
      </section>

      <IntakeForm />

      <section className="panel integration-note">
        <h3>提交配置说明</h3>
        <p>提交服务商与接口地址可在配置文件中统一管理，便于不同客户场景快速切换。</p>
      </section>
    </main>
  </div>
);

export default OnboardingForm;
