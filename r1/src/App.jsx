import { useState } from 'react';
import './App.scss';
import Blue from './Components/JamesBond/Blue';
import Brown from './Components/JamesBond/Brown';
import Green from './Components/JamesBond/Green';
import Red from './Components/JamesBond/Red';
import Yellow from './Components/JamesBond/Yellow';
import rand from './Functions/rand';

function App() {

    const [count, setCount] = useState(0);
    const [visual, setVisual] = useState(false);
    const [rColor, setRColor] = useState('white');
    const [racer1, setRacer1] = useState(0);
    const [racer2, setRacer2] = useState(0);

    const doSomething = () => {
        setRacer1(s => s + rand(1, 5));
        setRacer2(s => s + rand(1, 5));
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <Blue setCount={setCount}></Blue>
                <Green count={count}></Green>
                <Red setVisual={setVisual} racer1={racer1} rColor={rColor}></Red>
                <Brown visual={visual} setRColor={setRColor} racer2={racer2}></Brown>
                <Yellow doSomething={doSomething}></Yellow>
            </header>
        </div>
    );
}

export default App;