import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BootcampCard from './components/BootcampCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BootcampCard />
      <Footer />
    </div>
  );
}

export default App;
