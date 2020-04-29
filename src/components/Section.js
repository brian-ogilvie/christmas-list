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
      <div className="Section__header">
        <h2 className="Section__title">{title}</h2>
        <div className="Section__header__buttons">
          <button type="button" onClick={onRenameClick}>
            <i title="Rename Section" className="fas fa-pencil-alt" />
          </button>
          <button type="button" onClick={onDeleteClick}>
            <i title="Delete Section" className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
      <ul className="Section__list">
        {filteredItems.map(item => (
          <li key={`item-${item.id}`}>
            <Item item={item} />
          </li>
        ))}
      </ul>
      <div className="Section__controls">
        <button className="add-item" type="button" onClick={onAddItemClick}>
          <i title="Add Item" className="fas fa-plus" />
          Add Item to {title}
        </button>
      </div>
    </article>
  );
}
