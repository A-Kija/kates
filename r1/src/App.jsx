import './App.css';
import A from './Components/004/A';
import Circle from './Components/004/Circle';
import SC1 from './Components/004/SC1';
import SQ100 from './Components/004/SQ100';
import Text from './Components/004/Text';
import TwoColor from './Components/004/TwoColor';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                {/* <Text zodis="Geras Zuikis" zenklas="!" spalva="green"></Text>
                <Text zodis="Blogas Zuikis" zenklas="%" spalva="crimson"></Text>
                <Text zodis="Raudonas Zuikis" zenklas="$" spalva="yellow"></Text>
                <SC1 form="circle"></SC1>
                <SC1 form="circle"></SC1>
                <SC1 form="square"></SC1>
                <SQ100 h={55} w={700}></SQ100>
                <SQ100 h={800} w={20}></SQ100>
                <TwoColor c1="yellow" c2="black"></TwoColor>
                <TwoColor c1="yellow" c2="yellow"></TwoColor> */}
                <div className="container">
                    {
                        [...Array(10)].map((_, i) => <Circle key={i} number={i + 1}></Circle>)
                    }
                </div>
                <div className="container">

                    <A color1="pink" color2="yellow"></A>

                </div>
            </header>
        </div>
    );
}

export default App;