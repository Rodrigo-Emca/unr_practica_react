import React from 'react'

export default class Contador extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    
    incrementar = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        )
    }
}
