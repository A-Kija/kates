import { useState } from 'react';
import './App.scss';
import Inputs from './Components/013/Inputs';
import View from './Components/013/View';
function App() {

    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="two-col">
                    <div className="one"><Inputs setSq={setSq} /></div>
                    <div className="two"><View sq={sq} /></div>
                </div>
            </header>
        </div>
    );
}
export default App;