import { Component } from 'react';

class NiceClass extends Component {

    constructor() {
        super();
        this.state = { dydis: 30, fonas: 'skyblue', count: 1}; // default
    }

    addCount = () => {
        this.setState({count: this.state.count + 1})
    }

    greenButtonClicked = () => {
        this.setState({dydis: 60});

        console.log(this.state);
    }

    blueButtonClicked() {
        this.setState(this.state.fonas === 'orange' ? {fonas: 'skyblue'} : {fonas: 'orange'});
    }


    render() {
        return (
            <>
            <h2>{this.state.count}</h2>
            <h3 style={{
                color: this.props.spalva,
                backgroundColor: this.state.fonas,
                fontSize: this.state.dydis + 'px'
            }}>Aš princesė</h3>
            <button className="green" onClick={this.greenButtonClicked}>more</button>
            <button className="blue" onClick={() => this.blueButtonClicked()}>color</button>
            <button className="red" onClick={this.addCount}>+1</button>
            </>
        );
    }

}

export default NiceClass;