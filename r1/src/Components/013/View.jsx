function View({sq}) {

    return (
        <div className="view-container">
            {
                sq.map((s, i) => <div className="sq" key={i}>{s}</div>)
            }
        </div>
    )
}

export default View;