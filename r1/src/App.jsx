import './App.css';
import SC1 from './Components/004/SC1';
import SQ100 from './Components/004/SQ100';
import Text from './Components/004/Text';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                <Text zodis="Geras Zuikis" zenklas="!" spalva="green"></Text>
                <Text zodis="Blogas Zuikis" zenklas="%" spalva="crimson"></Text>
                <Text zodis="Raudonas Zuikis" zenklas="$" spalva="yellow"></Text>
                <SC1 form="circle"></SC1>
                <SC1 form="circle"></SC1>
                <SC1 form="square"></SC1>
                <SQ100 h={55} w={700}></SQ100>
                <SQ100 h={800} w={20}></SQ100>
            </header>
        </div>
    );
}

export default App;