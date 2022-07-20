import { useState } from 'react';
import './App.scss';
import Blue from './Components/JamesBond/Blue';
import Brown from './Components/JamesBond/Brown';
import Green from './Components/JamesBond/Green';
import Red from './Components/JamesBond/Red';

function App() {

    const [count, setCount] = useState(0);
    const [visual, setVisual] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <Blue setCount={setCount}></Blue>
                <Green count={count}></Green>
                <Red setVisual={setVisual}></Red>
                <Brown visual={visual}></Brown>
            </header>
        </div>
    );
}

export default App;