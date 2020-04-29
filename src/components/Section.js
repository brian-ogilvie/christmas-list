import React from 'react';
import { useSectionContext } from '../contexts/SectionContext';

export default function Section({ id, title }) {
  const { renameSection, deleteSection } = useSectionContext();

  const onDeleteClick = () => {
    const message =
      'Are you sure you wish to delete this section? This cannot be undone.';
    if (window.confirm(message)) {
      deleteSection(id);
    }
  };

  const onRenameClick = () => {
    const message = 'What would you like to call this section?';
    const newTitle = window.prompt(message, '');
    if (newTitle) {
      renameSection(id, newTitle);
    }
  };

  return (
    <article>
      <h2>{title}</h2>
      <button type="button" onClick={onDeleteClick}>
        Delete Section
      </button>
      <button type="button" onClick={onRenameClick}>
        Rename Section
      </button>
    </article>
  );
}
