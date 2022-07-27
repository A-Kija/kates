import { useState } from "react";

function Checkbox2() {

    const [cb, setCb] = useState(new Set(['A', 'D']));

    const doChange = e => {
        const cbCopy = new Set(cb);
        setCb(s => {
            s.has(e.target.value) ? cbCopy.delete(e.target.value) : cbCopy.add(e.target.value)
            return cbCopy;
        });
    }

    return (
        <fieldset>
            <legend>Checkbox 2: {[...cb].sort().map(c => <span key={c}>{c}</span>)}</legend>
            <div>A <input type="checkbox" value="A" checked={cb.has('A')} onChange={doChange}></input></div>
            <div>B <input type="checkbox" value="B" checked={cb.has('B')} onChange={doChange}></input></div>
            <div>C <input type="checkbox" value="C" checked={cb.has('C')} onChange={doChange}></input></div>
            <div>D <input type="checkbox" value="D" checked={cb.has('D')} onChange={doChange}></input></div>
        </fieldset>
    )

}

export default Checkbox2;