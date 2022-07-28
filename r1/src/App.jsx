import { useState } from 'react';
import './App.scss';
import Show from './Components/012/Show';
import TextBla2 from './Components/012/TextBla2';
function App() {

    const [word, setWord] = useState('')

    return (
        <div className="App">
            <header className="App-header">
                <h1>Repeat</h1>
                <Show word={word} />
                <TextBla2 setWord={setWord} />
                
            </header>
        </div>
    );
}
export default App;