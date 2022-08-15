import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Line";

function List() {

    const { animals, listDisabled } = useContext(DataContext);


    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>List</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        animals?.map(a => <Line key={a.id} animal={a}></Line>)
                    }

                </ul>
                {
                    listDisabled ?
                        <div className="loader-screen">
                            <div className="spinner-border" style={{
                                width: '4rem',
                                height: '4rem'
                            }} role="status">
                            </div>
                        </div> :
                        null
                }
            </div>
        </div>
    );
}

export default List;