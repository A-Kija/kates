import randColor from '../../Functions/randColor';
function Brown({visual, setRColor}) {

    return (
        <>
        <div className="sc" style={{borderRadius: visual ? '50%' : null}}></div>
        <button onClick={() => setRColor(randColor())}>R Color</button>
        </>
    )
}

export default Brown;