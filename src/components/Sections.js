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
    <div className="Sections">
      {sections.map(section => (
        <Section
          key={`section-${section.id}`}
          id={section.id}
          title={section.title}
        />
      ))}
      <button className="add-section" type="button" onClick={onAddSectionClick}>
        <i title="Add Section" className="fas fa-plus" />
        New Section
      </button>
    </div>
  );
}
