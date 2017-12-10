/**
 * Created by zsp on 2017/12/10.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
class UserAdd extends Component {
    /**
     * history 操作路由历史
     * location
     *
     *
     * */

    users = () => {
        return this.props.users;
    };
    handleSubmit = e => {
        e.preventDefault();
        let users = this.users();
        let id = this.props.match.params.id;
        if (id) {
            this.props.updateUser(id,this.refs.username.value)
        } else {
            this.props.addUser(this.refs.username.value);
        }

        // this.props.history.push('/user/list');
        this.props.history.goBack();
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        if (id!=undefined) {
            let users = this.users();
            let {username} = users.find(item => item.id == id);
            this.refs.username.value = username;
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">用户名：</label>
                    <input type="text" className="form-control" ref="username" required={true}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}
let mapstatetoprops = state => ({users:state.users});
let mapdispatchtoprops = {
    addUser: username => ({type: 'ADD', username}),
    updateUser:(id,username)=>({type:'UPDATE',id,username})
};
export default connect(mapstatetoprops, mapdispatchtoprops)(UserAdd)