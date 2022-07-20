import { useState } from 'react';
import './App.scss';
import Blue from './Components/JamesBond/Blue';
import Green from './Components/JamesBond/Green';

function App() {

    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <Blue setCount={setCount}></Blue>
                <Green count={count}></Green>
            </header>
        </div>
    );
}

export default App;