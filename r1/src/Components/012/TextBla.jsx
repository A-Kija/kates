import { useState } from "react"

function TextBla() {

    const [word, setWord] = useState('');
    const [text, setText] = useState('');

    return (
        <>
        <h2>{word}</h2>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => setWord(text)}>Do</button>
        </>
    )
}

export default TextBla;