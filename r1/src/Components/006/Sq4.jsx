import { useState } from 'react';

function Sq4() {

    const [count, setCount] = useState(0);

    return (
        <div className="sc" onClick={() => setCount(s => s + 1)}>{count}</div>
    );
}

export default Sq4;