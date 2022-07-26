import { useState } from 'react';
function Text() {

    const [text, setText] = useState('');

    const inputHandler = e => {
        setText(e.target.value)
    }

    return (
        <fieldset>
            <legend>text</legend>
            <input type="text" value={text} onChange={inputHandler}></input>
        </fieldset>
    );
}

export default Text;