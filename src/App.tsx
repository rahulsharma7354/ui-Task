import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Dashboard from './Components/LeftNavbar'
import Cards from './Components/RightNavbar';
import Body from './Components/Body'

function App() {
  return (
      <>
      <Header/>
      <div className='section-container'>
      <Dashboard/>
      <Body/>
      <Cards/>
      </div>

      </>
  );
}

export default App;
