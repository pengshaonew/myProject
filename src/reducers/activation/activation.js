/**
 * Created by zsp on 2017/12/10.
 */
import {
    ACTIVATION_ADD
} from '../../action/activation/activationAction'
export default function activation(state = {
    userName: '',
    tel: '',
}, action) {
    const {type,data} = action;
    switch (type) {
        case ACTIVATION_ADD:
            return {userName: data.userName,tel: data.tel};
        default:
            return state;
    }
}