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
      <h3 className="Item__title">{title}</h3>
      <label htmlFor={`item-${id}`}>
        <input
          id={`item-${id}`}
          type="checkbox"
          checked={received}
          onChange={onReceiveItemClick}
        />
      </label>
      <button type="button" onClick={onEditItemClick}>
        Edit Item
      </button>
      <button type="button" onClick={onDeleteItemClick}>
        Delete Item
      </button>
    </div>
  );
}
