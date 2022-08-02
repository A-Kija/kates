import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Inputs({ setSq, sqId }) {

    const [text, setText] = useState('');
    const [color, setColor] = useState('coral');
    const [disabled, setDisabled] = useState(true);
    const textInput = useRef();

    useEffect(() => {
        setDisabled(text.length < 3);
    }, [text]);


    useEffect(() => {
        textInput.current.focus();
    }, []);


    const addText = e => {
        setText(e.target.value);
    }

    const add = () => {
        setSq(s => [...s, { text, color, id: sqId.current++, show: true }]);
        setText('');
    }

    const sort = () => {
        setSq(s => [...s].sort((a, b) => a.text.localeCompare(b.text)));
    }

    const sortBack = () => {
        setSq(s => [...s].sort((a, b) => a.id - b.id));
    }

    const showGreen = () => {
        setSq(s => s.map(sq => ({ ...sq, show: sq.color === 'greenyellow' ? true : false })))
    }

    const showAll = () => {
        setSq(s => s.map(sq => ({ ...sq, show: true })))
    }

    return (
        <div className="inputs-bin">
            <div className="bin">
                <input id="coral" type="checkbox" checked={color === 'coral'} value="coral" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="coral" style={{ backgroundColor: 'coral' }}></label>
                <input id="greenyellow" type="checkbox" checked={color === 'greenyellow'} value="greenyellow" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="greenyellow" style={{ backgroundColor: 'greenyellow' }}></label>
                <input id="plum" type="checkbox" checked={color === 'plum'} value="plum" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="plum" style={{ backgroundColor: 'plum' }}></label>
                <span>Color</span>
            </div>
            <div className="bin">
                <input onChange={addText} value={text} ref={textInput} />
                <span>Text</span>
            </div>
            <div className="bin">
            <button className="green" onClick={add} disabled={disabled}>Add []</button>
            <span>Add New</span>
            </div>
            <div className="bin">
                <button className="blue" onClick={sort}>Sort</button>
                <button className="blue" onClick={sortBack}>Sort Back</button>
                <span>Sort</span>
            </div>
            <div className="bin">
                <button className="blue" onClick={showGreen}>Show Green</button>
                <button className="blue" onClick={showAll}>Show All</button>
                <span>Filter</span>
            </div>
        </div>
    )
}

export default Inputs; 