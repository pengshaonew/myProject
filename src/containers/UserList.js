/**
 * Created by zsp on 2017/12/10.
 */
import React, {Component} from 'react';
import store from '../store';
import {Link} from 'react-router-dom';
export default class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: [...store.getState().users]
        }
    }

    componentWillMount() {
        // let usersStr= localStorage.getItem('users');
        // let users=usersStr?JSON.parse(usersStr):[];
        // this.setState({users});
        this.unSubscribe = store.subscribe(() => {
            this.setState({
                users: [...store.getState().users]
            })
        })
    }
    componentWillUnmount() {
        this.unSubscribe();
    }
    del = id => {
        // let usersStr= localStorage.getItem('users');
        // let users=usersStr?JSON.parse(usersStr):[];
        // localStorage.setItem('users',JSON.stringify(users.filter((item,index)=>item.id!=id)));
        store.dispatch({type: 'DEL', id})
    };

    render() {
        return (
            <ul className="list-group">
                {
                    this.state.users.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <Link to={'/user/detail/' + item.id}>{item.username}</Link>
                            <button onClick={() => this.del(item.id)} className="pull-right btn btn-danger btn-xs">删除
                            </button>
                            <Link to={'/user/add/' + item.id} className="pull-right btn btn-danger btn-xs"
                                  style={{marginRight: '20px'}}>修改</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}