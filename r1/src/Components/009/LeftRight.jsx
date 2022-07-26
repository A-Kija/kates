import { useEffect, useState } from "react";
import rand from '../../Functions/rand';

function LeftRight({data}) {


    const [numbers, setNumbers] = useState(null);



    useEffect(()=> {
        setNumbers(data.map((e, i) => ({...e, row: i})).filter(d => d.left !== d.right));
    }, [data]);

    const add = () => {
        const left = rand(0, 45);
        const right = rand(0, 45);
        if (left !== right) {
            setNumbers(n => [...n, {left, right, row: n.length}]);
        }
    }

    const doLeft = () => {
        setNumbers(n => [...n].sort((a, b) => b.left - a.left));
    }

    const doRight = () => {
        setNumbers(n => [...n].sort((a, b) => b.right - a.right));
    }

    const doDefault = () => {
        setNumbers(n => [...n].sort((a, b) => a.row - b.row));
    }
    
    return (
        <>
        <ul>
            {
                numbers?.map((lr, i) => <li key={i}>{lr.left}-{lr.right}</li>)
            }
        </ul>
        <div className="container">
            <button onClick={add}>add numbers</button>
            <button className="blue" onClick={doLeft}>Left Sort</button>
            <button className="blue" onClick={doRight}>Right Sort</button>
            <button className="blue" onClick={doDefault}>Default Sort</button>
        </div>
        </>
    )

}

export default LeftRight;