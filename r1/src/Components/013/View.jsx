function View({sq}) {

    return (
        <div className="view-container">
            {
                sq.map((_, i) => <div className="sq" key={i}></div>)
            }
        </div>
    )
}

export default View;