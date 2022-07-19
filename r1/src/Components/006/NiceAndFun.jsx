import { useState } from "react";

function NiceAndFun({ spalva }) {

    const [size, setSize] = useState(36);

    const doSize = () => {
        setSize(56);
    }

    return (
        <>
            <h2 style={
                {
                    color: spalva,
                    fontSize: size + 'px'
                }
            }>Braškė</h2>
            <button onClick={doSize}>SIZE</button>
        </>
    )

}

export default NiceAndFun;