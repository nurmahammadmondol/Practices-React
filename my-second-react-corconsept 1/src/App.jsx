import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Todo from './Todo';
import Friends from './friend';

function App() {
  const actors = ['Nur', 'Mohammad', 'Robiul', 'Ovi', 'Almir', 'Mamun'];
  return (
    <>
      <h1>Vite + React</h1>
      {/* <Person></Person>
      <StudentId name="Robi" class="10" ID="709607"></StudentId>
      <StudentId name="Ovi" class="12" ID="709736"></StudentId>
      <StudentId name="Roni" class="10" ID="709668"></StudentId>
      <StudentId name="Nasir" class="11" ID="709676"></StudentId> */}

      {/* ********************************* */}
      {/* <PropsObj name="Laptop" price="32000$"></PropsObj>
      <PropsObj name="Mobile" price="12000$"></PropsObj>
      <PropsObj></PropsObj>
      <PropsObj name="Tablet" price="20000$"></PropsObj>
      <PropsObj name="Sound Box" price="32000$"></PropsObj> */}

      <Todo name="Friends"></Todo>

      {/* <Friends name="All"></Friends> */}

      {actors.map(actor => (
        <Friends name={actor}></Friends>
      ))}
    </>
  );
}

function Person() {
  const info = {
    name: 'Nur Mahammad',
    age: 22,
    profetion: 'studend',
  };
  return (
    <>
      <h2>
        My Name is {info.name} age {info.age} i am a {info.profetion}
      </h2>
    </>
  );
}

function StudentId(props) {
  // console.log(props);
  return (
    <div className="studentDetails">
      <h4>Name : {props.name}</h4>
      <h5>Id : {props.ID}</h5>
      <h5>Class :{props.class}</h5>
    </div>
  );
}

// const { name, price } = { name: 'Laptop', price: 32000 };
function PropsObj({ name = 'Not product', price = 0 }) {
  return (
    <div>
      <h3>
        This divices {name} price {price}
      </h3>
    </div>
  );
}
export default App;
