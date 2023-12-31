import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import Result from './components/Result';
import Relues from './components/Rules';
import Clock from './components/Time';
function App() {
  const [IsChoice, setIsChoice] = useState(false);
  const getChoice = (data) => {
    !data ? setIsChoice(false) : setIsChoice(true)
  }
  return (
    <div className="container">
      <Header />
      {
        IsChoice ? <Result choice={getChoice} /> : <Game choice={getChoice} />
      }

      <Relues />
      {/* <Clock/> */}
    </div>
  );
}

export default App;
