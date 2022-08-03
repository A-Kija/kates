import { useEffect } from "react";
import { useState } from "react";
import rand from '../../Functions/rand';

function Sq1({setCounter}) {

    const [sq, setSq] = useState([]);

    useEffect(() => {
        setCounter(s => [
            sq.filter(s => s.type === 0).length,
            sq.filter(s => s.type === 1).length
        ]);
    }, [sq, setCounter]);

    const add = () => {
        setSq(s => [...s, {color: 'pink', type: rand(0, 1)}, {color: 'skyblue', type: rand(0, 1)}]);
    }

    return (
        <>
        <div className="container">
            {
                sq.map((s, i) => <div className="sc" style={{
                    backgroundColor:s.color,
                    borderRadius: s.type ? '50%' : null
                }} key={i}></div>)
            }
        </div>
        <div className="container">
            <button onClick={add}>add</button>
        </div>
        </>
    )
}

export default Sq1