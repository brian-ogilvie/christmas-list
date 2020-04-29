import React from 'react';
import { useItemContext } from '../contexts/ItemContext';

export default function Item({ item }) {
  const { deleteItem, receiveItem } = useItemContext();
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

  return (
    <div>
      <h3>{title}</h3>
      <label htmlFor={`item-${id}`}>
        <input
          id={`item-${id}`}
          type="checkbox"
          checked={received}
          onChange={onReceiveItemClick}
        />
      </label>
      <button type="button" onClick={onDeleteItemClick}>
        Delete Item
      </button>
    </div>
  );
}
