import { useState } from 'react';
import rand from '../../Functions/rand';

function HelloWorld() {

    const [space, setSpace] = useState(0);

    return <h2 style={{
        letterSpacing: space + 'px',
        transition: 'all 0.7s cubic-bezier(.06,-0.6,1,-1.71)'
    }} onClick={() => setSpace(20 - rand(0, 23))}>Hello World</h2>

}

export default HelloWorld;