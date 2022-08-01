function Inputs({setSq}) {

    const add = () => {
        setSq(s => [...s, 1]);
    }

    return (
        <div className="inputs-bin">

            <button onClick={add}>Add []</button>
        </div>
    )
}

export default Inputs; 