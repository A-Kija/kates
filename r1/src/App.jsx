import { useReducer } from 'react';
import './App.scss';
import count from './Reducers/count';
function App() {

    const [number, dispachNumber] = useReducer(count, 0);

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

    return (
        <div className="App">
            <header className="App-header">
                <h1>useReducer</h1>
                <h2>Number now is: {number}</h2>
                <div className="container">
                    <button onClick={add1}>+1</button>
                    <button onClick={rem1}>-1</button>
                    <button onClick={do0}>0</button>
                </div>
            </header>
        </div>
    );
}
export default App;