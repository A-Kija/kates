import { useState, useContext, useEffect, useRef } from 'react';
import Data from './Data';
import rand from '../Functions/rand';


function EggsHolder({side, number}) {

    const [eggs, setEggs] = useState([...Array(12)].map(() => false));
    const { play, setReadyEggs, setResult, pos } = useContext(Data);
    const timer = useRef(null);
    const holdNumber = useRef(number);

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
        } else if(null === timer.current) {
            timer.current = setInterval(() => {
                setEggs(e => {
                    let egg;
                    const eggs = [...e];
                    egg = eggs.pop();
                    if (egg) {
                        setReadyEggs(eg => eg.filter(e => e !== holdNumber.current));
                        setResult(r => ({...r, missed: r.missed + 1}));
                    }
                    eggs.unshift(!rand(0, 6));
                    egg = eggs[eggs.length - 1];
                    if (egg) {
                        console.log(pos)
                        if (pos === holdNumber.current) {
                            setResult(r => ({...r, catched: r.catched + 1}));
                            eggs[eggs.length - 1] = false;
                        } else {
                            setReadyEggs(e => [...e, holdNumber.current]);
                        }
                    }
                    return eggs;
                })
            }, 1000)
        }
    }, [play, setReadyEggs, setResult, pos]);


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