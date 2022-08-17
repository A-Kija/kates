import { useState, useContext, useEffect, useRef } from 'react';
import Data from './Data';
import rand from '../Functions/rand';


function EggsHolder({side}) {

    const [eggs, setEggs] = useState([...Array(12)].map(() => false));
    const { play } = useContext(Data);
    const timer = useRef(null);

    useEffect(() => {
        return () => {
            if (null !== timer.current) {
                clearInterval(timer.current)
                timer.current = null;
            }
        }
    }, []);


    useEffect(() => {
        if (false === play) {
            if (null !== timer.current) {
                clearInterval(timer.current)
                timer.current = null;
            }
        } else {
            timer.current = setInterval(() => {
                setEggs(e => {
                    const eggs = [...e];
                    eggs.pop();
                    eggs.unshift(!rand(0, 6));
                    return eggs;
                })
            }, 1000)
        }
    }, [play])


    return (
        <div className={'eggs-bin ' + side}>
            <div className={'path ' + side}>
            {
                eggs.map((e, i) => e ? 
                <div className="egg" key={i}></div> :
                <div className="no-egg" key={i}></div>)
            }
            </div>
        </div>
    )
}

export default EggsHolder;