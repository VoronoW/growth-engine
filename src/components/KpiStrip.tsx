import CountUp from 'react-countup';
import { heroStats } from '../data/siteContent';

const KpiStrip = () => (
  <div className="kpi-strip reveal-on-scroll">
    {heroStats.map((stat) => (
      <article key={stat.label} className="kpi-card">
        <p className="kpi-value">
          <CountUp end={stat.value} duration={2.1} />
          {stat.suffix}
        </p>
        <p>{stat.label}</p>
      </article>
    ))}
  </div>
);

export default KpiStrip;
