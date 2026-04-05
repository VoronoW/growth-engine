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

const Home = () => {
  useReveal();

  return (
    <div className="page-shell">
      <header className="top-nav">
        <strong>增长引擎验证舱</strong>
        <nav>
          <a href="#diagnostic">Risk Diagnostic</a>
          <a href="#roadmap">90-Day Roadmap</a>
          <a href="#deliverables">Deliverables</a>
          <Link to="/onboarding">Client Onboarding</Link>
        </nav>
      </header>

      <main>
        <section className="hero panel">
          <p className="eyebrow">品牌出海加速器｜增长引擎验证舱（90天）</p>
          <h1>When paid acquisition stalls, rebuild the growth operating system.</h1>
          <p className="hero-sub">
            A 90-day consulting-grade reconstruction program for cross-border brands: attribution truth, test system
            validation, and operating handoff.
          </p>
          <p className="hero-positioning">Not media buying. Not outsourced execution. This is growth system architecture.</p>
          <div className="hero-cta">
            <a href="#cta" className="btn primary">
              Book Strategic Diagnosis
            </a>
            <Link to="/onboarding" className="btn ghost">
              Start 30-Day Onboarding
            </Link>
          </div>
        </section>

        <KpiStrip />

        <section id="diagnostic">
          <SectionHeader
            eyebrow="Core Risk Diagnostic"
            title="The hidden risks behind unstable ROAS"
            description="Built from cross-border diagnosis frameworks: symptom-level issues mapped to business-level consequences."
          />
          <div className="risk-grid">
            {riskItems.map((item) => (
              <article key={item.title} className="risk-card reveal-on-scroll">
                <p className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</p>
                <h3>{item.title}</h3>
                <p>
                  <span>Symptom:</span> {item.symptom}
                </p>
                <p>
                  <span>Consequence:</span> {item.consequence}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="System Solution Architecture"
            title="A growth reconstruction program designed for decision certainty"
            description="The 90-day scope combines data infrastructure, experimentation discipline, and operating transfer."
          />
          <div className="architecture-list panel reveal-on-scroll">
            {architecturePoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </section>

        <section id="roadmap">
          <SectionHeader
            eyebrow="Interactive 90-Day Roadmap"
            title="Three phases from data truth to operating handoff"
            description="Each month has explicit goals, cross-functional actions, and documented outcomes."
          />
          <RoadmapTabs />
        </section>

        <section id="deliverables">
          <SectionHeader
            eyebrow="Deliverables Library"
            title="Transferable operating assets, not temporary campaign outputs"
            description="Every artifact is documented, reusable, and designed to stay inside your team after the engagement."
          />
          <div className="deliverables-grid">
            {deliverables.map((item) => (
              <article key={item} className="deliverable-card reveal-on-scroll">
                <h3>{item}</h3>
                <p>Structured for handoff, governance, and quarterly iteration.</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Who This Is For"
            title="Designed for operators upgrading from execution to systems"
            description="Typical client profiles aligned to cross-border founder, CMO, and growth leadership use cases."
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
            eyebrow="Operating Model Comparison"
            title="Agency support vs growth operating system reconstruction"
            description="A strategic shift from buying labor to building internal compounding capability."
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
          <h2>Value Framing</h2>
          <p>
            Use roughly 10% of planned media budget to protect the remaining 90%. Validate data truth and operating
            mechanics before scaling spend.
          </p>
          <p>You are paying for truth, structure, and certainty—not channel task execution.</p>
        </section>

        <section id="cta" className="final-cta panel reveal-on-scroll">
          <h2>Activate your growth diagnosis</h2>
          <p>Choose your preferred next step and receive a tailored solution overview.</p>
          <div className="hero-cta">
            <a className="btn primary" href="mailto:advisor@growthengine.example">
              Contact Advisor
            </a>
            <Link className="btn ghost" to="/onboarding">
              Submit Project Needs
            </Link>
            <a className="btn ghost" href="mailto:advisor@growthengine.example?subject=Request%20Solution%20Overview">
              Request Solution Overview
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>品牌出海加速器｜增长引擎验证舱（90天）</p>
        <p>Contact: advisor@growthengine.example · LinkedIn · WeChat · GitHub Pages Ready</p>
      </footer>
    </div>
  );
};

export default Home;
