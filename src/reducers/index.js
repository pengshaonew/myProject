import {combineReducers} from 'redux';
import activation from './activation/activation'

const appReducer = combineReducers({
    activation
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = {};
    }
    return appReducer(state, action);
};
export default rootReducer;