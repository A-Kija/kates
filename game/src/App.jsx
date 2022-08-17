import { useState } from 'react';
import './App.scss';
import Catcher from './Components/Catcher';
import Data from './Components/Data';
import EggsHolder from './Components/EggsHolder';

function App() {

  const [play, setPlay] = useState(false)


  return (
    <Data.Provider value={{
      play
    }}>
    <div className="App">
    <div className="game-frame">
    <EggsHolder side="left top" />
    <EggsHolder side="right top" />
    <EggsHolder side="left bottom" />
    <EggsHolder side="right bottom" />
    <Catcher/>
    </div>

    <button onClick={() => setPlay(p => !p)}>Play/Stop</button>
    </div>
    </Data.Provider>
  );
  
}

export default App;
