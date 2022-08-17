import { useState } from 'react';
import './App.scss';
import Catcher from './Components/Catcher';
import Data from './Components/Data';
import EggsHolder from './Components/EggsHolder';
import Result from './Components/Result';

function App() {

  const [play, setPlay] = useState(false);

  const [result, setResult] = useState({missed: 0, catched: 0});

  const [readyEggs, setReadyEggs] = useState([]);

  const [pos, setPos] = useState(4);



  return (
    <Data.Provider value={{
      play,
      setReadyEggs,
      setResult,
      result,
      pos,
      setPos,
      readyEggs
    }}>
    <div className="App">
    <div className="game-frame">
    <EggsHolder side="left top" number={1}/>
    <EggsHolder side="right top"  number={2}/>
    <EggsHolder side="left bottom"  number={3}/>
    <EggsHolder side="right bottom"  number={4}/>
    <Catcher/>
    
    </div>

    <button onClick={() => setPlay(p => !p)}>Play/Stop</button>
    <Result/>
    </div>
    </Data.Provider>
  );
  
}

export default App;
