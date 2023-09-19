import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Brand from './components/brand/Brand';
import Community from './containers/community/Community';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
        <Brand />
        <Community /> 
        
        
      </header>
    </div>
  );
}

