import React from 'react';
import { useSectionContext } from '../contexts/SectionContext';
import Section from './Section';

export default function Sections() {
  const { sections } = useSectionContext();
  return (
    <div>
      {sections.map(section => (
        <Section
          key={`section-${section.id}`}
          id={section.id}
          title={section.title}
        />
      ))}
    </div>
  );
}
