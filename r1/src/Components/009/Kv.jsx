import { useEffect } from "react";

function Kv({ k, i }) {


    useEffect(() => {
        // console.log('Atsirado');
        // return () => {
        //     console.log('Dingo', i);
        // }
    }, []);

    return (
        <div className="sc" style={{ backgroundColor: k }}>{i}</div>
    );
}

export default Kv;