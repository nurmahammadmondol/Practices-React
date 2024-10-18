import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  );
}

function Person() {
  const info = {
    name: 'Nur Mahammad Mondol',
    age: 22,
    profetion: 'student',
  };
  return (
    <>
      <h5>
        My Name is {info.name} age {info.age}, i am a {info.profetion}
      </h5>
    </>
  );
}

function Student() {
  return (
    <>
      <h3>Name : </h3>
      <h4>Class :</h4>
      <h4>Roll :</h4>
    </>
  );
}
export default App;
