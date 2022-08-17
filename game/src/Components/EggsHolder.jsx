import { useState, useContext, useEffect, useRef } from 'react';
import Data from './Data';
import rand from '../Functions/rand';


function EggsHolder({side, number}) {

    const [eggs, setEggs] = useState([...Array(12)].map(() => false));
    const { play, manageEggs } = useContext(Data);
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
                    let egg;
                    const eggs = [...e];
                    egg = eggs.pop();
                    if (egg) {
                        manageEggs('fall', number);
                    }
                    eggs.unshift(!rand(0, 6));
                    egg = eggs[eggs.length - 1];
                    if (egg) {
                        manageEggs('ready', number);
                    }
                    return eggs;
                })
            }, 1000)
        }
    }, [play]);


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