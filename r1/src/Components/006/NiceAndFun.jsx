import { useState } from "react";

function NiceAndFun({ spalva }) {

    const [size, setSize] = useState(36); //Hook
    const [bg, setBg] = useState('white'); //Hook

    const doSize = () => {
        setSize(s => s === 56 ? 36 : 56);
    }

    const doBack = () => {
        setBg(s => s === 'black' ? 'white' : 'black');
    }

    return (
        <>
            <h2 style={
                {
                    color: spalva,
                    fontSize: size + 'px',
                    backgroundColor: bg
                }
            }>Braškė</h2>
            <div className="container">
            <button onClick={doSize}>SIZE</button>
            <button onClick={doBack}>BG</button>
            </div>
        </>
    )

}

export default NiceAndFun;