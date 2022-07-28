import { useState } from "react";

function Range() {

    const [w, setW] = useState('100');
    const [h, setH] = useState('100');


    return (
        <div className="big-bin">
            <div className="big-bin__top">
                <div className="big-bin__top__left">
                    <input type="range" min="0" max="800" value={h} onChange={e => setH(e.target.value)} step="10" />
                </div>
                <div className="big-bin__top__right">
                    <div className="nice" style={{
                        width: w + 'px',
                        height: h + 'px'
                    }}></div>
                </div>
            </div>
            <div className="big-bin__bottom">
                <span>{h.padStart(3, '0')} px</span>
                <input type="range" min="0" max="800" value={w} onChange={e => setW(e.target.value)} step="10" />
                <span>{w.padStart(3, '0')} px</span>
            </div>
        </div>
    );


}

export default Range;