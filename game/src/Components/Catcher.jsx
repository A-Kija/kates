import { useEffect } from "react";
import { useState } from "react";

function Catcher() {

    const [pos, setPos] = useState(4);

    useEffect(() => {
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case 'q':
                    setPos(1);
                    break;
                case 'w':
                    setPos(2);
                    break;
                case 'a':
                    setPos(3);
                    break;
                case 's':
                    setPos(4);
                    break;
                default:
            }
        });
    })

    return (
        <div className="catch">
            <div className="bin top left" style={{ visibility: pos === 1 ? 'visible' : 'hidden' }}></div>
            <div className="bin top right" style={{ visibility: pos === 2 ? 'visible' : 'hidden' }}></div>
            <div className="bin bottom left" style={{ visibility: pos === 3 ? 'visible' : 'hidden' }}></div>
            <div className="bin bottom right" style={{ visibility: pos === 4 ? 'visible' : 'hidden' }}></div>
        </div>
    )

}

export default Catcher;