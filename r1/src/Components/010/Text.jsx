import { useState } from 'react';
function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#009900');

    const inputHandler = e => {
        setText(e.target.value)
    }

    const colorHandler = e => {
        setColor(e.target.value)
    }

    return (
        <fieldset>
            <legend style={{color}}>{text ? text : 'text'}</legend>
            <input type="text" value={text} onChange={inputHandler}></input>
            <div></div>
            <input type="color" value={color} onChange={colorHandler}></input>
        </fieldset>
    );
}

export default Text;