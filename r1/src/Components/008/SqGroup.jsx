import { useState } from "react";
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';

function SqGroup() {

    const [sq, setSq] = useState([]);

    const makeIt = () => {
        setSq([...Array(rand(5, 25))].map(_ => randColor()));
    }

    return (
        <>
        <button onClick={makeIt}>Make it</button>
        <h1>Squares Group</h1>
        <div className="container">
            {
                sq.map((s, i) => <div className="nice-square" key={i} style={{
                    backgroundColor: s + '70',
                    borderColor: s
                }}></div>)
            }
        </div>
        </>
    );


}

export default SqGroup;