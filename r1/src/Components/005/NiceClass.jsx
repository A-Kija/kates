import { Component } from 'react';

class NiceClass extends Component {

    constructor() {
        super();
        this.state = { dydis: 30, fonas: 'skyblue'}; // default
    }


    render() {
        return (
            <>
            <h3 style={{
                color: this.props.spalva,
                backgroundColor: this.state.fonas,
                fontSize: this.state.dydis + 'px'
            }}>Aš princesė</h3>
            <button className="green">more</button>
            </>
        );
    }

}

export default NiceClass;