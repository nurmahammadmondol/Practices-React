import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NumberCount from './count';
import SerialItems from './Serial';

function App() {
  return (
    <>
      <h1>React Corconsept Recap</h1>
      <NumberCount></NumberCount>

      <SerialItems></SerialItems>
    </>
  );
}

export default App;
