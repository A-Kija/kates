import { useState } from 'react';
import './App.scss';
import Catcher from './Components/Catcher';
import Data from './Components/Data';
import EggsHolder from './Components/EggsHolder';

function App() {

  const [play, setPlay] = useState(false);

  const [result, setResult] = useState({missed: 0, catched: 0});

  const [readyEggs, setReadyEggs] = useState([]);


  const manageEggs = (type, number) => {
    if (type === 'fall') {
      setReadyEggs(egg => egg.filter(e => e !== number));
      setResult(r => ({...r, missed: r.missed + 1}));
    }
    if (type === 'ready') {
      setReadyEggs(egg => [...egg, number]);
    }
  }


  return (
    <Data.Provider value={{
      play,
      manageEggs
    }}>
    <div className="App">
      <h1 className="App-link">{result.missed}</h1>
    <div className="game-frame">
    <EggsHolder side="left top" number={1}/>
    <EggsHolder side="right top"  number={2}/>
    <EggsHolder side="left bottom"  number={3}/>
    <EggsHolder side="right bottom"  number={4}/>
    <Catcher/>
    </div>

    <button onClick={() => setPlay(p => !p)}>Play/Stop</button>
    </div>
    </Data.Provider>
  );
  
}

export default App;
