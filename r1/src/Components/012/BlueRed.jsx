import { useState } from "react"

function BlueRed() {

    const [cb, setCb] = useState(true);
    const [cb2, setCb2] = useState(true);

    return (
        <>
        <div className="nice-square" style={{
            backgroundColor: cb ? null : '#fb618a60',
            borderColor: cb ? null : '#fb618a',
            borderRadius: cb2 ? null : '50%',
        }}></div>
        <input type="checkbox" checked={cb} onChange={() => setCb(b => !b)}></input>
        <input type="checkbox" checked={cb2} onChange={() => setCb2(b => !b)}></input>
        </>
    )
}

export default BlueRed;