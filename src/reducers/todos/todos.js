/**
 * Created by zsp on 2017/12/10.
 */
import {createStore} from 'redux';
let reducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('users', JSON.stringify(action.username));
            return {users: [...state.users, {username: action.username, id: Date.now()}]};
        case 'DEL':
            return {users: state.users.filter(item => item.id != action.id)};
        case 'UPDATE':
            return {
                users: state.users.map(item => {
                    if (item.id == action.id) {
                        item.username = action.username;
                    }
                    return item;
                })
            };
        default:
            return state;
    }
};
let store = createStore(reducer);
window.store = store;
export default store;