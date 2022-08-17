import { useState, useContext, useEffect } from 'react';
import Data from './Data';

function EggsHolder() {

    const [eggs, setEggs] = useState([...Array(12)].map(() => false));
    const { play } = useContext(Data)


    useEffect(() => {
        if (false === play) {
            return;
        }
        const timer = setInterval(() => {
            

        }, 1000)

    }, [play])


    return (
        <div>

        </div>
    )
}

export default EggsHolder;