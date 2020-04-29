import React from 'react';
import { useSectionContext } from '../contexts/SectionContext';
import { useItemContext } from '../contexts/ItemContext';
import Item from './Item';

export default function Section({ id, title }) {
  const { renameSection, deleteSection } = useSectionContext();
  const { addItem, items } = useItemContext();
  const filteredItems = items.filter(({ sectionId }) => sectionId === id);

  const onDeleteClick = () => {
    const message = `Are you sure you wish to delete ${title}???`;
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

  const onAddItemClick = () => {
    const message = 'What item would you like to add?';
    const newItem = window.prompt(message, '');
    if (newItem) {
      addItem(id, newItem);
    }
  };

  return (
    <article className="Section">
      <h2>{title}</h2>
      <ul className="Section__list">
        {filteredItems.map(item => (
          <li key={`item-${item.id}`}>
            <Item item={item} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={onAddItemClick}>
        Add Item
      </button>
      <button type="button" onClick={onRenameClick}>
        Rename Section
      </button>
      <button type="button" onClick={onDeleteClick}>
        Delete Section
      </button>
    </article>
  );
}
