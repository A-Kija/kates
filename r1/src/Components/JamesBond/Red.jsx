function Red({setVisual, rColor, racer1}) {
    return (
        <>
        <h2>{racer1}</h2>
        <div className="sc" style={{backgroundColor: rColor}}></div>
        <button onClick={() => setVisual(s => !s)}>O-[]</button>
        </>
    )
}
export default Red;