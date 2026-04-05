import { useState } from 'react';
import { phases } from '../data/roadmap';

const RoadmapTabs = () => {
  const [activePhaseId, setActivePhaseId] = useState(phases[0].id);
  const activePhase = phases.find((phase) => phase.id === activePhaseId) ?? phases[0];

  return (
    <div className="roadmap reveal-on-scroll">
      <div className="tab-list" role="tablist" aria-label="90天阶段切换">
        {phases.map((phase) => (
          <button
            key={phase.id}
            role="tab"
            aria-selected={phase.id === activePhaseId}
            className={`tab-btn ${phase.id === activePhaseId ? 'active' : ''}`}
            onClick={() => setActivePhaseId(phase.id)}
          >
            <span>{phase.month}</span>
            <strong>{phase.title}</strong>
          </button>
        ))}
      </div>

      <article className="phase-panel">
        <h3>{activePhase.title}</h3>
        <p className="phase-goal">阶段目标：{activePhase.goal}</p>
        <div className="phase-grid">
          <div>
            <h4>关键动作</h4>
            <ul>
              {activePhase.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>核心交付</h4>
            <ul>
              {activePhase.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="phase-metrics">
          <p>
            <span>本阶段解决问题</span>
            {activePhase.solvedProblem}
          </p>
          <p>
            <span>协同部门</span>
            {activePhase.departments.join(' · ')}
          </p>
          <p>
            <span>阶段业务结果</span>
            {activePhase.result}
          </p>
        </div>
      </article>
    </div>
  );
};

export default RoadmapTabs;
