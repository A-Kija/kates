function View({sq, setSq}) {

    const remove = id => {
        setSq(s => s.filter(sq => sq.id !== id));
    }

    return (
        <div className="view-container">
            {
                sq.map(s => (
                <div className="sq" key={s.id} style={{backgroundColor:s.color}}>
                    {s.text}
                <span className="id-number">{s.id}</span>
                <button className="red" onClick={() => remove(s.id)}>delete</button>
                </div>
                ))
            }
        </div>
    )
}

export default View;