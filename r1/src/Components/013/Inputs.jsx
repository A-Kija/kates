import { useState } from "react";

function Inputs({setSq}) {

    const [text, setText] = useState('');

    const add = () => {
        setSq(s => [...s, text]);
        setText('');
    }

    return (
        <div className="inputs-bin">
            <input onChange={e => setText(e.target.value)} value={text} />
            <button className="red" onClick={add}>Add []</button>
        </div>
    )
}

export default Inputs; 