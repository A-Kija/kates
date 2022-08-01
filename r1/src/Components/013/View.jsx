function View({sq}) {

    return (
        <div className="view-container">
            {
                sq.map((s, i) => (
                <div className="sq" key={i} style={{backgroundColor:s.color}}>
                    {s.text}
                <span className="id-number">{s.id}</span>
                </div>
                
                ))
            }
        </div>
    )
}

export default View;