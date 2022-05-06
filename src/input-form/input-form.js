import { useState } from "react";
import './input-form.css';

export default function InputForm({ receiveData }){
    let [from, setFrom] = useState('-3PI');
    let [to, setTo] = useState('3PI');
    let [iterations, setIterations] = useState(50);
    let [precision, setPrecision] = useState(0.001);

    const [x, setX] = useState([]);

    const [functionY, setFunctionY] = useState([]);
    const [fourierY, setFourierY] = useState([]);

    async function handleData(){
        let rangeRegex = /^(?:-?\d+(?:\.\d+)?|-?(?:\d+(?:\.\d+)?)?pi)$/i;
        if(!rangeRegex.test(from) || !rangeRegex.test(to)) throw new Error('Incorrect range input!')

        let {x, functionY, fourierY} = await fetch(`http://localhost:8080?from=${from}&to=${to}&iterations=${iterations}&precision=${precision}`)
        .then(response => response.json());

        setX(x);
        setFunctionY(functionY);
        setFourierY(fourierY);
    }

    return (
        <div id='form'>
            <div className="form-item-container">
                <label className="form-item" htmlFor="from">Enter the range: </label>
                <input className="form-item" id="from" type="text" name="from" value={from} onChange={event => setFrom(event.target.value)}/>
                <input className="form-item" id="to" type="text" name="to" value={to} onChange={event => setTo(event.target.value)}/>
            </div>
    
            <div className="form-item-container">
                <label className="form-item" htmlFor="iterations">Enter number of iterations: </label>
                <input className="form-item" id="iterations" type="number" name="iterations" value={iterations} onChange={event => setIterations(event.target.value)}/>
            </div>
    
            <div className="form-item-container">
                <label className="form-item" htmlFor="precision">Enter precision: </label>
                <input className="form-item" id="precision" type="number" name="precision" value={precision} onChange={event => setPrecision(event.target.value)}/>
            </div>

            <button id='form-button' onClick={() => { handleData(); receiveData(x, functionY, fourierY); }}>Build!</button>
        </div>
    );
}