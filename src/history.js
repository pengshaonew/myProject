import createBrowserHistory  from 'history/createBrowserHistory'
// import {Modal} from 'antd-mobile'

export default createBrowserHistory({
    getUserConfirmation(message, callback) {
        // Modal.confirm({
        //     title: '确认要离开吗',
        //     content: message,
        //     onOk() {
        //         callback(true);
        //     },
        //     onCancel() {
        //         callback(false);
        //     }
        // })
    }
})