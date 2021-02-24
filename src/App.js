import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
//   let person = {
//     name: "Sabbir",
//     job: "B.sc in CSE"
// }
//   let person2 = {
//     name: "Sabbir",
//     job: "B.sc in CSE"
// }
// let style ={
//   color: "red",
//   backgroundColor: "yellow"
// }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My Heading: {person.name + " "+ person.job}</h1>
        <h3>My Heading: {person2.name + " "+ person2.job}</h3>
        <p>My first React Paragraph</p> */}
        <p>I am a React Person</p>
        <Person name="Sabbir" job="Engineer"></Person>
        <Person name="Shorna" job="Agriculture"></Person>
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div style={{border: "2px solid yellow", width: "400px"}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
