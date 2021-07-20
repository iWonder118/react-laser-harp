import React from 'react';
import LaserHarp from './laserHarp';
import './App.css';

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  return (
    <div className="App">
      <div style={style}>
        <LaserHarp />
      </div>
    </div>
  );
}

export default App;
