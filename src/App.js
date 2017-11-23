import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <Button type="" />
                </p>
            </div>
        );
    }
}

export default App;
