import React from 'react';
import { useItemContext } from '../contexts/ItemContext';

export default function Item({ item }) {
  const { deleteItem, receiveItem, renameItem } = useItemContext();
  const { title, received, id } = item;

  const onDeleteItemClick = () => {
    const message = `Are you sure you want to delete ${title}???`;
    if (window.confirm(message)) {
      deleteItem(id);
    }
  };

  const onReceiveItemClick = () => {
    receiveItem(id);
  };

  const onEditItemClick = () => {
    const message = `What would you like to call ${title}?`;
    const newTitle = window.prompt(message, '');
    if (newTitle) {
      renameItem(id, newTitle);
    }
  };

  return (
    <div className="Item">
      <label htmlFor={`item-${id}`} className="Item__label">
        <input
          className="Item__checkbox"
          id={`item-${id}`}
          type="checkbox"
          checked={received}
          onChange={onReceiveItemClick}
        />
        <h3 className="Item__title">{title}</h3>
      </label>
      <div className="Item__controls">
        <button type="button" onClick={onEditItemClick}>
          <i title="Edit Item" className="fas fa-pencil-alt" />
        </button>
        <button type="button" onClick={onDeleteItemClick}>
          <i title="Delete Item" className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
}
