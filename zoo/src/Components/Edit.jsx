import { useContext } from "react";
import DataContext from "./DataContext";

function Edit() {

    const {modalData, setModalData} = useContext(DataContext);

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary">Close</button>
                        <button type="button" className="btn btn-outline-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;