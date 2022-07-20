import { useState } from "react";

function Visual({visualBig, colorBig}) {

    const [border, setBorder] = useState(true);

    return (
        <div className={'big-visual ' + visualBig} style={{
            backgroundColor: colorBig + '69',
            borderColor: colorBig,
            borderWidth: border ? null : 0
        }}><button className="circle" onClick={() => setBorder(s => !s)}></button></div>
    );
}

export default Visual;