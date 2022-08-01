import { useState } from "react";

function Inputs({setSq, sqId}) {

    const [text, setText] = useState('');
    const [color, setColor] = useState('coral');
    

    const add = () => {
        setSq(s => [...s, {text, color, id:sqId.current++}]);
        setText('');
    }

    return (
        <div className="inputs-bin">
            <div>
                <input id="coral" type="checkbox" checked={color === 'coral'} value="coral" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="coral" style={{backgroundColor:'coral'}}></label>
                <input id="greenyellow" type="checkbox" checked={color === 'greenyellow'} value="greenyellow" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="greenyellow" style={{backgroundColor:'greenyellow'}}></label>
                <input id="plum" type="checkbox" checked={color === 'plum'} value="plum" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="plum" style={{backgroundColor:'plum'}}></label>
            </div>
            <input onChange={e => setText(e.target.value)} value={text} />
            <button className="red" onClick={add}>Add []</button>
        </div>
    )
}

export default Inputs; 