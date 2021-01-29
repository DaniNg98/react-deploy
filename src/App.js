import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const count = localStorage.getItem("count");
        if (count !== null) {
            this.setState({
                count: parseInt(count)
            });
        }

        window.addEventListener("beforeunload", () => {
            localStorage.setItem("count", this.state.count);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }));
    }   
}

export default App;
