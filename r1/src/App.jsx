import { useState } from 'react';
import './App.scss';
import B1 from './Components/JamesBond/B1';
import B2 from './Components/JamesBond/B2';
import Visual from './Components/JamesBond/Visual';
// import Blue from './Components/JamesBond/Blue';
// import Brown from './Components/JamesBond/Brown';
// import Green from './Components/JamesBond/Green';
// import Red from './Components/JamesBond/Red';
// import Yellow from './Components/JamesBond/Yellow';
import rand from './Functions/rand';

function App() {

    // const [count, setCount] = useState(0);
    // const [visual, setVisual] = useState(false);
    // const [rColor, setRColor] = useState('white');
    // const [racer1, setRacer1] = useState(0);
    // const [racer2, setRacer2] = useState(0);
    // const [racer1c, setRacer1c] = useState('black');
    // const [racer2c, setRacer2c] = useState('black');

    // const doSomething = () => {
    //     const r1 = rand(1, 5);
    //     const r2 = rand(1, 5);

    //     if (racer1 + r1 > racer2 + r2) {
    //         setRacer1c('crimson');
    //         setRacer2c('gray');
    //     }
    //     else if (racer1 + r1 < racer2 + r2) {
    //         setRacer2c('crimson');
    //         setRacer1c('gray');
    //     }
    //     else {
    //         setRacer2c('black');
    //         setRacer1c('black');
    //     }
    //     setRacer1(s => s + r1);
    //     setRacer2(s => s + r2);
    // }

    const [visualBig, setVisualBig] = useState('square');

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                {/* <Blue setCount={setCount}></Blue>
                <Green count={count}></Green>
                <Red setVisual={setVisual} racer1={racer1} rColor={rColor} racer1c={racer1c}></Red>
                <Brown visual={visual} setRColor={setRColor} racer2={racer2} racer2c={racer2c}></Brown>
                <Yellow doSomething={doSomething}></Yellow> */}
                <Visual visualBig={visualBig}></Visual>
                <div className="nice-buttons-bin">
                    <B1 setVisualBig={setVisualBig}></B1>
                    <B2 setVisualBig={setVisualBig}></B2>
                </div>
            </header>
        </div>
    );
}

export default App;