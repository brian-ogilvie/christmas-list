import { useReducer, useEffect } from 'react';

export default function useLocalStorageReducer(reducer, key, defaultState) {
  const found = localStorage.getItem(key);
  const initialState = found ? JSON.parse(found) : defaultState;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}
