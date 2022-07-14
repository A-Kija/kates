function TwoColor({ c1, c2 }) {

    return (
        <h3 style={
            {
                backgroundColor: c1 !== c2 ? c1 : 'gray',
                color: c1 !== c2 ? c2 : 'red'
            }
        }>Two Color</h3>
    )
}

export default TwoColor;