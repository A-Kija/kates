function Buttons({setView, view}) {

    return (
    <div className="nice-buttons-bin static">
        <button className={view === 1 ? 'blue' : 'red'} onClick={() => setView(1)}>Squares Group</button>
        <button className={view === 2 ? 'blue' : 'red'}  onClick={() => setView(2)}>Hello World</button>
        <button className={view === 3 ? 'blue' : 'red'}  onClick={() => setView(3)}>View 3</button>
    </div>
    );


}

export default Buttons;


