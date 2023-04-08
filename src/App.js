import logo from './logo.svg';
import './App.css';
import myImage from './reactjs.jpeg'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <br />
      <img src={myImage}></img>
    </div>
  );
}

export default App;