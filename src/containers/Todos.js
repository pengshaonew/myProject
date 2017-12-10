/**
 * Created by zsp on 2017/12/10.
 */
import React from 'react';
import {connect} from 'react-redux';
class Todos extends React.Component {
    constructor() {
        super();
        this.handleOnChang = this.handleOnChang.bind(this);
        this.state = {
            value: ''
        }
    }

    handleOnChang(e) {
        this.setState({value: e.target.value});
    };

    handleOnClick(){

    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleOnChang}/>
                <input type="button" value='提交' onClick={this.handleOnClick}/>
            </div>
        )
    }
}
export default connect({},{})(Todos)