import randColor from '../../Functions/randColor';
function Brown({visual, setRColor, racer2}) {

    return (
        <>
        <h2>{racer2}</h2>
        <div className="sc" style={{borderRadius: visual ? '50%' : null}}></div>
        <button onClick={() => setRColor(randColor())}>R Color</button>
        </>
    )
}

export default Brown;