import { useState } from "react"

function Sq1() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, '', '']);
    }

    return (
        <>
        <div className="container">
            {
                sq.map((_, i) => <div className="sc" key={i}></div>)
            }
        </div>
        <div className="container">
            <button onClick={add}>add</button>
        </div>
        </>
    )
}

export default Sq1