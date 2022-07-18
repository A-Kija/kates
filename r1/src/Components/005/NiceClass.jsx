import { Component } from 'react';
import Kv from './Kv';

class NiceClass extends Component {

    constructor() {
        super();
        this.state = { dydis: 30, fonas: 'skyblue', count: 1, kv: []}; // default
    }

    addCount = () => {
        this.setState(s => ({count: s.count + 1}));
        this.setState(s => ({count: s.count + 1}));
    }

    greenButtonClicked = () => {
        this.setState({dydis: 60});

        console.log(this.state);
    }

    blueButtonClicked() {
        this.setState(this.state.fonas === 'orange' ? {fonas: 'skyblue'} : {fonas: 'orange'});
    }

    addKv = () => {
        this.setState(s => ({kv: [...s.kv, '']}));
    }


    render() {
        return (
            <>
            <h2>{this.state.count}</h2>
            <div className="container">
            {
                this.state.kv.map((_, i) => <Kv key={i}></Kv>)
            }
            </div>
            <h3 style={{
                color: this.props.spalva,
                backgroundColor: this.state.fonas,
                fontSize: this.state.dydis + 'px'
            }}>Aš princesė</h3>
            <button className="green" onClick={this.greenButtonClicked}>more</button>
            <button className="blue" onClick={() => this.blueButtonClicked()}>color</button>
            <button className="red" onClick={this.addCount}>+1</button>
            <button className="red" onClick={this.addKv}>+1 KV</button>
            </>
        );
    }

}

export default NiceClass;