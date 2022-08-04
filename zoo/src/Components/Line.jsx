function Line({ animal }) {

    return (
        <li className="list-group-item">
            <div className="bin">
                <div className="content">
                    <h3>{animal.type}</h3>
                    <i>{animal.weight} Kg</i>
                </div>
                <div className="control">
                    <button type="button" className="btn btn-outline-success m-1">Edit</button>
                    <button type="button" className="btn btn-outline-danger m-1">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Line;