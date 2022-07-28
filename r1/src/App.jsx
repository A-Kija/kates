// import { useState } from 'react';
import './App.scss';
import Range from './Components/012/Range';
// import BlueRed from './Components/012/BlueRed';
// import Green from './Components/012/Green';
// import Show from './Components/012/Show';
// import TextBla2 from './Components/012/TextBla2';
function App() {

    // const [word, setWord] = useState('');

    // const [text, setText] = useState('');
    // const [h1, setH1] = useState('Repeat');

    // const doBrown = () => {
    //     setH1(text);
    // }

    return (
        <div className="App">
            <header className="App-header">
                {/* <h1>{h1}</h1> */}
                {/* <Show word={word} />
                <TextBla2 setWord={setWord} /> */}
                {/* <Green doBrown={doBrown} setText={setText}  text={text} /> */}
                {/* <BlueRed /> */}
                <Range />
                
            </header>
        </div>
    );
}
export default App;