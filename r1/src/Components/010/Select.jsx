import { useState } from 'react';

const selectData = [
    {value: 1, text: 'One'},
    {value: 2, text: 'Two'},
    {value: 5, text: 'Five'},
    {value: 1000000, text: 'One million money'}
];

function Select() {

    const [select, setSelect] = useState(5);

    const [color, setColor] = useState(null);

    const selectHandler = e => {
        setSelect(e.target.value)
    }

    return (
        <fieldset>
            <legend style={{color}}>Selected: <b>{select} {selectData.find(s => select == s.value).text}</b></legend>
            <select value={select} onChange={selectHandler}>
                {
                    selectData.map(s => <option key={s.value} value={s.value}>{s.text}</option>)
                }
            </select>
            <button onClick={() => setColor('crimson')}>Make Color</button>
        </fieldset>
    );
}

export default Select;