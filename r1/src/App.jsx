import './App.css';
import SC from './Components/004/SC';
import Text from './Components/004/Text';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                <Text zodis="Geras Zuikis" zenklas="!" spalva="green"></Text>
                <Text zodis="Blogas Zuikis" zenklas="%" spalva="crimson"></Text>
                <Text zodis="Raudonas Zuikis" zenklas="$" spalva="yellow"></Text>
                <SC form="circle"></SC>
                <SC form="circle"></SC>
                <SC form="square"></SC>
            </header>
        </div>
    );
}

export default App;