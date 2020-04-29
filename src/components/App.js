import React from 'react';
import './App.css';
import { SectionContextProvider } from '../contexts/SectionContext';
import Sections from './Sections';

function App() {
  return (
    <SectionContextProvider>
      <div className="App">
        <h1>Christmas List</h1>
        <Sections />
      </div>
    </SectionContextProvider>
  );
}

export default App;
