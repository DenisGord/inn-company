import Header from './component/Header';
import React from 'react';
import FirstExample from './component/FirstExample';
import SecondExample from './component/SecondExample';

import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='flex-container' >
      <FirstExample/>
      <SecondExample/>
      </div>
     
   </div>
  );
}

export default App;
