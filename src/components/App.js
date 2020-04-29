import React from 'react';
import './App.css';
import { SectionContextProvider } from '../contexts/SectionContext';
import { ItemContextProvider } from '../contexts/ItemContext';
import Sections from './Sections';

function App() {
  return (
    <SectionContextProvider>
      <ItemContextProvider>
        <div className="App">
          <h1>Christmas List</h1>
          <Sections />
        </div>
      </ItemContextProvider>
    </SectionContextProvider>
  );
}

export default App;
