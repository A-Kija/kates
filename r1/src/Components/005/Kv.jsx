import { Component } from 'react';

class Kv extends Component {


    // constructor() {
    //     super();
    //     console.log('KV construct');
    // }

    componentDidMount() {
        console.log('KV gime');
    }

    componentWillUnmount() {
        console.log('KV numiro');
    }

    render() {
        return <div className="sc"></div>
    }

}

export default Kv;

