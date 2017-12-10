/**
 * Created by zsp on 2017/12/10.
 */
export const ACTIVATION_ADD = 'ACTIVATION_ADD';

//
export function setUserName(parmas) {
    return dispatch => {
        dispatch({type:ACTIVATION_ADD,data:parmas})
    }
}