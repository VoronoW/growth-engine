import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

const SectionHeader = ({ eyebrow, title, description }: Props) => (
  <header className="section-header reveal-on-scroll">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    <p className="section-description">{description}</p>
  </header>
);

export default SectionHeader;
