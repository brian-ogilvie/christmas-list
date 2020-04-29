import React from 'react';
import { useSectionContext } from '../contexts/SectionContext';
import Section from './Section';

export default function Sections() {
  const { sections, addSection } = useSectionContext();

  const onAddSectionClick = () => {
    const message = 'What would you like this section?';
    const title = window.prompt(message, '');
    if (title) {
      addSection(title);
    }
  };

  return (
    <div>
      <button type="button" onClick={onAddSectionClick}>
        New Section
      </button>
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
