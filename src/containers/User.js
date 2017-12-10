/**
 * Created by zsp on 2017/12/10.
 */
import React, {Component} from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import {
    Link,
    Route
} from 'react-router-dom';
export default () => {
    return(
        <div className="row">
            <div className="col-md-2">
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to='/user/list'>用户列表</Link></li>
                    <li><Link to='/user/add'>新增用户</Link></li>
                </ul>
            </div>
            <div className="col-md-10">
                <Route path={"/user/list"} component={UserList} />
                <Route exact={true} path="/user/add" component={UserAdd} />
                <Route path="/user/add/:id" component={UserAdd} />
                <Route path="/user/detail/:id" component={UserDetail} />
                <Route exact={true} path={"/user"} component={UserList} />
            </div>
        </div>
    )
};