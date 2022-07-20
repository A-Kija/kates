import randColor from '../../Functions/randColor';
function B3({setColorBig}) {

    return (
        <button className="red" onClick={() => setColorBig(randColor())}>Fancy!</button>
    )
}

export default B3;