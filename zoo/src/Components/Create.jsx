function Create() {

    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>New</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Animal type</label>
                    <input type="text" className="form-control" />
                    <small className="form-text text-muted">Enter your animal type or name here.</small>
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input type="text" className="form-control" />
                    <small className="form-text text-muted">How is big and fat your animal?</small>
                </div>
                <button type="button" className="btn btn-outline-info m-3">Add</button>
            </div>
        </div>
    )
}

export default Create;