/**
 * Created by zsp on 2017/12/10.
 */
import {
    ACTIVATION_ADD
} from '../../action/activationAction'
export default function activation(state = {
    userName: '',
    tel: '',
}, action) {
    const {type} = action;
    switch (type) {
        case ACTIVATION_ADD:
            return {userName: action.userName};
        default:
            return state;
    }
}