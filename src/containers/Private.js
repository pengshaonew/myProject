/**
 * Created by zsp on 2017/12/10.
 */
import React from 'react';
import {Redirect,Route} from 'react-router-dom';
export default ({path, component: Component}) => {
    return (
        <Route path={path} render={()=>localStorage.getItem('user') ? <Component/> : <Redirect to={{
            pathname: '/login',
            state: {from: path}
        }}/>} />

    )
}
