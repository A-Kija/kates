function Circle({circle, setCircles}) {


    const move = () => {
        if (circle.side === 'left') {
            setCircles(c => c.map(cir => circle.id === cir.id ? {...cir, side: 'right'} : {...cir}));
        } else {
            setCircles(c => c.map(cir => circle.id === cir.id ? {...cir, side: 'left'} : {...cir}));
        }
    }


    return (
        <div className="nice" onClick={move}>
            <span>{circle.id}</span>
        </div>
    )
}

export default Circle;