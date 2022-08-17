import { useState } from 'react';
import './App.scss';
import Data from './Components/Data';
import EggsHolder from './Components/EggsHolder';

function App() {

  const [play, setPlay] = useState(false)


  return (
    <Data.Provider value={{
      play
    }}>
    <div className="App">
    <EggsHolder side="left" />
    <EggsHolder side="right" />


    <button onClick={() => setPlay(p => !p)}>Play/Stop</button>
    </div>
    </Data.Provider>
  );
  
}

export default App;
