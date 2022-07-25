import { useEffect, useState } from "react";
import rand from '../../Functions/rand';

function LeftRight({data}) {


    const [numbers, setNumbers] = useState(null);



    useEffect(()=> {
        setNumbers(data.filter(d => d.left !== d.right));
    }, [data]);

    const add = () => {
        const left = rand(0, 45);
        const right = rand(0, 45);
        if (left !== right) {
            setNumbers(n => [...n, {left, right}]);
        }
    }

    
    return (
        <>
        <ul>
            {
                numbers?.map((lr, i) => <li key={i}>{lr.left}-{lr.right}</li>)
            }
        </ul>
            <button onClick={add}>add numbers</button>
        </>
    )

}

export default LeftRight;