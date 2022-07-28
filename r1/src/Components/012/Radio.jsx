import { useState } from "react";

function Radio() {

    const [radio, setRadio] = useState('C');

    const doRadio = e => {
        setRadio(e.target.value)
    }

    return (
        <div className="animals-list">
            <div clasName="input">A <input type="radio" value="A" onChange={doRadio} checked={'A' === radio}></input></div>
            <div clasName="input">B <input type="radio" value="B" onChange={doRadio} checked={'B' === radio}></input></div>
            <div clasName="input">C <input type="radio" value="C" onChange={doRadio} checked={'C' === radio}></input></div>
            <div clasName="input">D <input type="radio" value="D" onChange={doRadio} checked={'D' === radio}></input></div>
        </div>
    );

}

export default Radio;