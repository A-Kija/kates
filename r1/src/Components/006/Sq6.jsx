import { useState } from 'react';

function Sq4() {

    const [count, setCount] = useState(0);

    return (
        <div className="sc" style={{
            borderRadius: count > 5 ? '50%' : null
        }} onClick={() => setCount(s => s + 1)}>{count}</div>
    );
}

export default Sq4;