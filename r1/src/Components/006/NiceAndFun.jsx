import { useState } from 'react';
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';
import Sq4 from './Sq4';
import Sq5 from './Sq5';
import Sq6 from './Sq6';

function NiceAndFun({ spalva }) {

    const [size, setSize] = useState(36); //Hook
    const [bg, setBg] = useState('white'); //Hook

    const [count, setCount] = useState(0);
    const [sq1, setSq1] = useState([]);
    const [sq2, setSq2] = useState([]);
    const [sq3, setSq3] = useState([]);
    const [sq4, setSq4] = useState([]);
    const [sq5, setSq5] = useState([]);
    const [sq6, setSq6] = useState([]);

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

    const doSq3 = () => {
        setSq3(s => [...s, {color: randColor(), number: rand(10, 99)}]);
    }

    const doSq4 = () => {
        setSq4(s => [...s, '']);
    }

    const doSq5 = () => {
        setSq5(s => [...s, '']);
    }

    const doSq6 = () => {
        setSq6(s => [...s, '']);
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
                {
                    sq3.map((c, i) => <div className="sc" key={i} style={{backgroundColor: c.color}}>{c.number}</div>)
                }
            </div>
            <div className="container">
                {
                    sq4.map((_, i) => <Sq4 key={i}></Sq4>)
                }
            </div>
            <div className="container">
                {
                    sq5.map((_, i) => <Sq5 key={i}></Sq5>)
                }
            </div>
            <div className="container">
                {
                    sq6.map((_, i) => <Sq6 key={i}></Sq6>)
                }
            </div>
            <div className="container">
            <button onClick={doSize}>SIZE</button>
            <button onClick={doBack}>BG</button>
            <button onClick={doMore}>MORE</button>
            <button className="blue" onClick={doSq1}>+SQ1</button>
            <button className="blue" onClick={doSq2}>+SQ2</button>
            <button className="red" onClick={() => setSq1([])}>reset SQ1</button>
            <button className="red" onClick={() => setSq2(s => s.filter((_, i) => i))} >- SQ2</button>
            <button className="blue" onClick={doSq3}>+SQ3</button>
            <button className="blue" onClick={doSq4}>+SQ4</button>
            <button className="blue" onClick={doSq5}>+SQ5</button>
            <button className="blue" onClick={doSq6}>+SQ6</button>
            </div>
        </>
        
    )

}

export default NiceAndFun;