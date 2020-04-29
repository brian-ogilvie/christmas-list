import React, { useReducer, useContext, createContext } from 'react';

const defaultState = [
  {
    id: 1,
    sectionId: 1,
    title: 'Transformers',
    received: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'addItem': {
      const id = Math.max(...state.map(({ id }) => id)) + 1;
      const { sectionId, title } = action.payload;
      return [
        ...state,
        {
          id,
          sectionId,
          title,
          received: false,
        },
      ];
    }
    case 'receiveItem': {
      const index = state.findIndex(item => item.id === action.payload);
      if (index === -1) return state;
      const item = state[index];
      return [
        ...state.slice(0, index),
        {
          ...item,
          received: !item.received,
        },
        ...state.slice(index + 1),
      ];
    }
    case 'renameItem': {
      const { id, title } = action.payload;
      const index = state.findIndex(item => item.id === id);
      if (index === -1) return state;
      const item = state[index];
      return [
        ...state.slice(0, index),
        {
          ...item,
          title,
        },
        ...state.slice(index + 1),
      ];
    }
    case 'deleteItem':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

const ItemContext = createContext();

export function useItemContext() {
  const { state, dispatch } = useContext(ItemContext);

  function addItem(sectionId, title) {
    dispatch({
      type: 'addItem',
      payload: {
        sectionId,
        title,
      },
    });
  }

  function receiveItem(itemId) {
    dispatch({
      type: 'receiveItem',
      payload: itemId,
    });
  }

  function renameItem(id, title) {
    dispatch({
      type: 'renameItem',
      payload: { id, title },
    });
  }

  function deleteItem(itemId) {
    dispatch({
      type: 'deleteItem',
      payload: itemId,
    });
  }

  return { items: state, addItem, receiveItem, renameItem, deleteItem };
}

export function ItemContextProvider({ children, initialState = defaultState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
}
