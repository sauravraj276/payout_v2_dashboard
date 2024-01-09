import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Mainsection from './components/Mainsection/Mainsection';

function App() {
  return <div className='root'>
  <Navbar />
  <div className='maindiv_space'></div>
  <div className='maindiv'>  
  <Header/>
  <Mainsection/>

  </div>

  </div>;
}

export default App;
