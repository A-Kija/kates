import { useState } from 'react';
import './App.scss';
import Inputs from './Components/013/Inputs';
import View from './Components/013/View';
function App() {

    const [sq, setSq] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Tema 2</h1> 
                <Inputs setSq={setSq}/>
                <View sq={sq}/>
            </header>
        </div>
    );
}
export default App;