import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Kv from './Components/009/Kv';
import randColor from './Functions/randColor';

function App() {

    const [kv, setKv] = useState([]);
    const [count, setCount] = useState(0);

    const add = () => {
        setKv(k => [...k, randColor()]);
        
    }

    let a = 25;

    useEffect(() => {

      if (kv.length > 10) {
        setKv([]);
      }

    }, [kv, a]);


    useEffect(() => {

        if (kv.length === 4 && kv[3] !== 'black') {
            setKv(kv.map((c, i) => i === 3 ? 'black' : c));
        }
  
      }, [kv]);


    useEffect( () => {

        if (count > 10) {
            setCount(0);
        }

    }, [count]);



    return (
        <div className="App">
            <header className="App-header">
                <h1>useEffect --- {count}</h1>
                <div className="container">
                    {
                        kv.map((k, i) => <Kv key={i} k={k} i={i}></Kv>)
                    }
                </div>

                <div className="container">

                <button onClick={add}>add []</button>
                <button onClick={() => setCount(c => c + 1)}>+ 1</button>

                </div>

            </header>
        </div>
    );
}
export default App;