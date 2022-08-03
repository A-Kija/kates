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
        setSq(s => [...s, 
            {color: 'pink', type: rand(0, 1), size: rand(25, 125), row: s.length},
            {color: 'skyblue', type: rand(0, 1), size: rand(25, 125), row: s.length + 1}
        ]);
    }

    const sort = () => {
        setSq(s => [...s].sort((a, b) => b.size - a.size));
    }

    const sortBack = () => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }

    return (
        <>
        <div className="container">
            {
                sq.map((s, i) => <div className="sc" style={{
                    backgroundColor:s.color,
                    borderRadius: s.type ? '50%' : null,
                    width: s.size + 'px',
                    height: s.size + 'px'
                }} key={i}></div>)
            }
        </div>
        <div className="container">
            <button onClick={add}>add</button>
            <button onClick={sort}>sort</button>
            <button onClick={sortBack}>sort back</button>
        </div>
        </>
    )
}

export default Sq1