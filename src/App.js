import logo from './logo.svg';
import './App.css';
import myImage from './reactjs.jpeg'
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is a simple paragraph</p>
      <ol>
        <li>C</li>
        <li>Python</li>
        <li>JavaScript</li>
      </ol>
      <img src={myImage}></img>
    </div>
  );
}

var numbers = [1,2,3,4,5];
const multiplyNums = numbers.map((number)=>{
    return (number * 5);
});

console.log(multiplyNums);

const numbers_2 = [1,2,3,4,5];

const updatedNums = numbers_2.map((number)=>{
  return <li>{number}</li>;
});

export default App;