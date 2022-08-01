import { useEffect } from "react";
import { useState } from "react";

function Inputs({ setSq, sqId }) {

    const [text, setText] = useState('');
    const [color, setColor] = useState('coral');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(text.length < 3);
    }, [text])


    const addText = e => {
        setText(e.target.value);
    }


    const add = () => {
        setSq(s => [...s, { text, color, id: sqId.current++ }]);
        setText('');
    }

    const sort = () => {
        setSq(s => [...s].sort((a, b) => a.text.localeCompare(b.text)));
    }

    const sortBack = () => {
        setSq(s => [...s].sort((a, b) => a.id - b.id));
    }

    return (
        <div className="inputs-bin">
            <div>
                <input id="coral" type="checkbox" checked={color === 'coral'} value="coral" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="coral" style={{ backgroundColor: 'coral' }}></label>
                <input id="greenyellow" type="checkbox" checked={color === 'greenyellow'} value="greenyellow" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="greenyellow" style={{ backgroundColor: 'greenyellow' }}></label>
                <input id="plum" type="checkbox" checked={color === 'plum'} value="plum" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="plum" style={{ backgroundColor: 'plum' }}></label>
            </div>
            <input onChange={addText} value={text} />
            <button className="green" onClick={add} disabled={disabled}>Add []</button>
            <button className="blue" onClick={sort}>Sort</button>
            <button className="blue" onClick={sortBack}>Sort Back</button>
        </div>
    )
}

export default Inputs; 