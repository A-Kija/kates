import { useEffect, useState } from "react";
import rand from '../../Functions/rand';

function LeftRight({data}) {


    const [numbers, setNumbers] = useState(null);

    const [sortOrder, setSortOrder] = useState(null)


    useEffect(() => {
        if (null === sortOrder) {
            return;
        }
        if ('left' === sortOrder) {
            setNumbers(n => [...n].sort((a, b) => b.left - a.left));
        } else if ('right' === sortOrder) {
            setNumbers(n => [...n].sort((a, b) => b.right - a.right));
        } else {
            setNumbers(n => [...n].sort((a, b) => a.row - b.row));
        }
    }, [sortOrder]);


    useEffect(()=> {
        setNumbers(data.map((e, i) => ({...e, row: i, show: true})).filter(d => d.left !== d.right));
    }, [data]);

    const add = () => {
        const left = rand(0, 45);
        const right = rand(0, 45);
        if (left !== right) {
            setNumbers(n => [...n, {left, right, row: n.length, show: true}]);
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

    const filter20 = () => {
        setNumbers(n => n.map(nb => ({...nb, show: nb.left > 20})));
    }
    
    const filter10 = () => {
        setNumbers(n => n.map(nb => ({...nb, show: nb.left < 10})));
    }

    const nofilter = () => {
        setNumbers(n => n.map(nb => ({...nb, show: true})));
    }

    return (
        <>
        <ul>
            {
                numbers?.map((lr, i) => lr.show ? <li key={i}>{lr.left}-{lr.right}</li> : null)
            }
        </ul>
        <div className="container">
            <button onClick={add}>add numbers</button>
            <button className="blue" onClick={doLeft}>Left Sort</button>
            <button className="blue" onClick={doRight}>Right Sort</button>
            <button className="blue" onClick={doDefault}>Default Sort</button>

            <button className="red" onClick={() => setSortOrder('left')}>Left Sort</button>
            <button className="red" onClick={() => setSortOrder('right')}>Right Sort</button>
            <button className="red" onClick={() => setSortOrder('default')}>Default Sort</button>

            <button className="green" onClick={filter20}>min 21</button>
            <button className="green" onClick={filter10}>max 9</button>
            <button className="green" onClick={nofilter}>Show All</button>
        </div>
        </>
    )

}

export default LeftRight;