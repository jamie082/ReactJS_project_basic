import logo from './logo.svg';
import './App.css';
import myImage from './reactjs.jpeg'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <img src={myImage}></img>
    </div>
  );
}

function console_code() {
  var numbers = [1,2,3,4,5];
  const multiplyNums = numbers.map((number)=>{
    return (number * 5);
});

console.log(multiplyNums);

export default App;