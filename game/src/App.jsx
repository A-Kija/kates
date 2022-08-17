import { useState } from 'react';
import './App.scss';
import Data from './Components/Data';

function App() {

  const [play, setPlay] = useState(false)


  return (
    <Data.Provider value={{
      play
    }}>
    <div className="App">
sss
    </div>
    </Data.Provider>
  );
  
}

export default App;
