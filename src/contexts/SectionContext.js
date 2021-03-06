import React, { createContext, useContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const SectionContext = createContext();

const defaultState = [
  {
    id: 1,
    title: 'Volume 1',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'addSection': {
      const id = state.length
        ? Math.max(...state.map(section => section.id)) + 1
        : 1;
      return [
        ...state,
        {
          id,
          title: action.payload,
        },
      ];
    }
    case 'deleteSection':
      return state.filter(({ id }) => id !== action.payload);
    case 'renameSection': {
      const { id, title } = action.payload;
      const index = state.findIndex(section => section.id === id);
      if (index === -1) return state;
      return [
        ...state.slice(0, index),
        {
          id,
          title,
        },
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
}

export function useSectionContext() {
  const { state, dispatch } = useContext(SectionContext);

  function addSection(title) {
    dispatch({
      type: 'addSection',
      payload: title,
    });
  }

  function deleteSection(sectionId) {
    dispatch({
      type: 'deleteSection',
      payload: sectionId,
    });
  }

  function renameSection(sectionId, newTitle) {
    dispatch({
      type: 'renameSection',
      payload: {
        id: sectionId,
        title: newTitle,
      },
    });
  }

  return { addSection, deleteSection, renameSection, sections: state };
}

export function SectionContextProvider({ children }) {
  const [state, dispatch] = useLocalStorageReducer(
    reducer,
    'christmas-list-sections',
    defaultState
  );
  return (
    <SectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SectionContext.Provider>
  );
}
