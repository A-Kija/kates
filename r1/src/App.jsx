import { useState } from 'react';
import { useReducer } from 'react';
import './App.scss';
import count from './Reducers/count';
import square from './Reducers/square';
function App() {

    const [number, dispachNumber] = useReducer(count, 0);
    const [numberVal, setNumberVal] = useState('');
    const [sq, dispachSq] = useReducer(square, []);

    const add1 = () => {
        const action = {
            type: 'plus_one'
        }
        dispachNumber(action);
    }

    const rem1 = () => {
        const action = {
            type: 'minus_one'
        }
        dispachNumber(action);
    }

    const do0 = () => {
        const action = {
            type: 'reset'
        }
        dispachNumber(action);
    }

    const addSome = () => {
        const action = {
            type: 'add_some',
            payload: numberVal
        }
        dispachNumber(action);
    }

    const remSome = () => {
        const action = {
            type: 'rem_some',
            payload: numberVal
        }
        dispachNumber(action);
    }

    const addSq = () => {
        const action = {
            type: 'add'
        }
        dispachSq(action);
    }

    const remSq = () => {
        const action = {
            type: 'rem'
        }
        dispachSq(action);
    }

    const doEmpty = () => {
        const action = {
            type: 'clear'
        }
        dispachSq(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>useReducer</h1>
                <h2>Number now is: {number}</h2>
                <div className="container">
                    <button onClick={add1}>+1</button>
                    <button onClick={rem1}>-1</button>
                    <button onClick={do0}>0</button>
                    <input className="cinput" type="text" value={numberVal} onChange={e => setNumberVal(e.target.value.length <= 2 ? e.target.value : numberVal)}/>
                    <button onClick={addSome}>+?</button>
                    <button onClick={remSome}>-?</button>
                </div>
                <div className="container">
                    {
                        sq.map((_, i) => <div key={i} className="sc"></div>)
                    }
                </div>
                <div className="container">
                <button onClick={addSq}>+[]</button>
                    <button onClick={remSq}>-[]</button>
                    <button onClick={doEmpty}>[]</button>
                </div>
            </header>
        </div>
    );
}
export default App;