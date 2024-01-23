import React from 'react';
import Header from './components/Header/Header';
import Bootcamps from './components/Header/Bootcamps/Bootcamps';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Otros componentes seguirán aquí */}
      <Bootcamps />
    </div>
  );
}

export default App;
