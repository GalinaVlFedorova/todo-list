import './App.css';
import imageHead from "./iconHead.png";
import imageBottom from "./photo.jpg"
import { TODOLIST } from './todo';

function App() {
  return (
    <div className="app">
      <div className='header'>
        <img src={imageHead} alt="to do list" width="80px"/>
        <h1>TO DO LIST</h1>
      </div>
      <TODOLIST/>
      <div className="container">
        <img className="bottom" src={imageBottom} alt="to do list" width="200px"/>
      </div>
      
    </div>
  );
}

export default App;
