function D({count}) {

    return (
        <>
        {
            [...Array(count)].map((_, i) => <div key={i} className="circle"></div>)
        }
        </>
    )
}

export default D