import { useState } from 'react';
import './App.css';
import InputForm from './input-form/input-form';
import Canvas from './canvas/canvas';

function App() {
  const [x, setX] = useState([]);
  const [functionY, setFunctionY] = useState([]);
  const [fourierY, setFourierY] = useState([]);

  const receiveCanvasData = (x, firstY, secondY) => {
    setX(x);
    setFunctionY(firstY);
    setFourierY(secondY);
  }
  
  return (
    <div id='app'>
      <InputForm receiveData={receiveCanvasData}></InputForm>
      <Canvas x={x} funcY={functionY} fourY={fourierY} ></Canvas>
    </div>
  );
}

export default App;
