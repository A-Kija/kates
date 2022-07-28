import { useState } from "react"

function BlueRed() {

    const [cb, setCb] = useState(true);

    return (
        <>
        <div className="nice-square" style={{
            backgroundColor: cb ? null : '#fb618a60',
            borderColor: cb ? null : '#fb618a',
        }}></div>
        <input type="checkbox" checked={cb} onChange={() => setCb(b => !b)}></input>
        
        </>
    )
}

export default BlueRed;