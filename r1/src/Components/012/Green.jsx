import Brown from "./Brown";

function Green({doBrown, setText, text}) {
    return (
        <div className="text-bin">
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <Brown doBrown={doBrown} />
        </div>
    )
}

export default Green;