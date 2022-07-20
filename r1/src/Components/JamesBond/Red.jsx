function Red({setVisual, rColor}) {
    return (
        <>
        <div className="sc" style={{backgroundColor: rColor}}></div>
        <button onClick={() => setVisual(s => !s)}>O-[]</button>
        </>
    )
}
export default Red;