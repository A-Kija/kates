function Buttons({setView, view}) {

    return (
    <div className="nice-buttons-bin static">
        <button className={view === 1 ? 'blue' : 'red'} onClick={() => setView(1)}>View 1</button>
        <button className={view === 2 ? 'blue' : 'red'}  onClick={() => setView(2)}>View 2</button>
        <button className={view === 3 ? 'blue' : 'red'}  onClick={() => setView(3)}>View 3</button>
    </div>
    );


}

export default Buttons;


