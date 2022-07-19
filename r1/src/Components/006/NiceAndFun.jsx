import { useState } from 'react';
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';

function NiceAndFun({ spalva }) {

    const [size, setSize] = useState(36); //Hook
    const [bg, setBg] = useState('white'); //Hook

    const [count, setCount] = useState(0);
    const [sq1, setSq1] = useState([]);
    const [sq2, setSq2] = useState([]);

    const doSize = () => {
        setSize(s => s === 56 ? 36 : 56);
    }

    const doBack = () => {
        setBg(s => s === 'black' ? 'white' : 'black');
    }

    const doMore = () => {
        setCount(s => s + rand(5, 10));
    }

    const doSq1 = () => {
        setSq1(s => [...s, '']);
    }

    const doSq2 = () => {
        setSq2(s => [...s, randColor()]);
    }

    return (
        <>
            <h2 style={
                {
                    color: spalva,
                    fontSize: size + 'px',
                    backgroundColor: bg
                }
            }>Braškė {count}</h2>
            <div className="container">
                {
                    sq1.map((_, i) => <div className="sc" key={i}>{i + 1}</div>)
                }
            </div>
            <div className="container">
                {
                    sq2.map((c, i) => <div className="sc" key={i} style={{backgroundColor: c}}></div>)
                }
            </div>
            <div className="container">
            <button onClick={doSize}>SIZE</button>
            <button onClick={doBack}>BG</button>
            <button onClick={doMore}>MORE</button>
            <button className="blue" onClick={doSq1}>+SQ1</button>
            <button className="blue" onClick={doSq2}>+SQ2</button>
            <button className="red" onClick={() => setSq1([])}>reset SQ1</button>
            </div>
        </>
    )

}

export default NiceAndFun;