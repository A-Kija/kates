import { useState } from 'react';
import rand from '../../Functions/rand';

function NiceAndFun({ spalva }) {

    const [size, setSize] = useState(36); //Hook
    const [bg, setBg] = useState('white'); //Hook

    const [count, setCount] = useState(0);

    const doSize = () => {
        setSize(s => s === 56 ? 36 : 56);
    }

    const doBack = () => {
        setBg(s => s === 'black' ? 'white' : 'black');
    }

    const doMore = () => {
        setCount(s => s + rand(5, 10));
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
            <button onClick={doSize}>SIZE</button>
            <button onClick={doBack}>BG</button>
            <button onClick={doMore}>MORE</button>
            </div>
        </>
    )

}

export default NiceAndFun;