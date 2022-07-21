import { useState } from "react";
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';

function SqGroup() {

    const [sq, setSq] = useState([]);

    const makeIt = () => {
        setSq([]);
        const count = rand(15, 25);
        let go = 0;
        const timerId = setInterval(() => {
            setSq(s => [...s, randColor()].sort((a, b) => rand(0, 1) ? 1 : -1));
            go++;
            if (count === go) {
                clearInterval(timerId);
            }
        }, 200);
    }

    return (
        <>
        <button onClick={makeIt}>Make it</button>
        <h1>Squares Group</h1>
        <div className="container">
            {
                sq.map((s, i) => <div className="nice-square" key={i} style={{
                    backgroundColor: s + '70',
                    borderColor: s,
                }}></div>)
            }
        </div>
        </>
    );


}

export default SqGroup;