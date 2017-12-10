import React from 'react';
import {connect} from 'react-redux'
import {List, InputItem, Button, Toast, Radio} from 'antd-mobile';
import 'isomorphic-fetch'
import {
    setUserName
} from '../../action/activation/activationAction'
const RadioItem = Radio.RadioItem;

class HisWxMain extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data: '',
            verifyCodeBtn: false,
            verifyCodeBtnTxt: '发送验证码',
            code: null,
            userName: '1',
            tel: '1'
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        String.prototype.getUrl = function getUrl() {
            let reg = /([^=&?]+)=([^=&?]+)/g, obj = {};
            this.replace(reg, function () {
                let key = arguments[1];
                let value = arguments[2];
                obj[key] = value;
            });
            return obj;
        };
    }


    // 提交
    handleSubmit() {
        if (!/^[\u4e00-\u9fa5]+$/.test(this.state.userName)) {
            Toast.info('用户名只能是汉字', 1);
            return;
        }
        if (!/^1[345789]\d{9}$/.test(this.state.tel)) {
            Toast.info('请输入合法的手机号', 1);
            // return;
        }
        this.props.setUserName({userName:this.state.userName,tel:this.state.tel});
        /*fetch('/war/memberCard/activate', {
         method: 'post',
         headers: {
         'Content-Type': 'application/json',
         },
         body: JSON.stringify(values)
         }).then(response => {
         response.json().then(res=>{
         let flag = response.flag;
         if (typeof flag !== 'undefined' && flag === 1) {
         Modal.success({
         title: response.message,
         content: '',
         onOk() {}
         })
         } else {
         Modal.warning({
         title: response.message,
         content: '',
         onOk() {}
         })
         }
         })*/
    }

    handleChange(value, flag) {
        this.setState({[flag]:value});
    };

    render() {
        let {userName, tel} = this.props;
        return (
            <div style={{margin: '20px', padding: '20px', background: '#fff'}}>
                <List renderHeader={() => '必填信息'}>
                    <InputItem
                        onChange={value => this.handleChange(value,'userName')}
                        placeholder="请输入姓名">姓名</InputItem>
                    <InputItem
                        onChange={value => this.handleChange(value,'tel')}
                        placeholder="请输入手机号">手机号</InputItem>
                </List>
                <Button style={{background: '#01be00', color: '#fff', marginTop: '30px'}}
                        onClick={this.handleSubmit}>立即激活</Button>
                <p>姓名：{userName}</p>
                <p>电话：{tel}</p>
                <p>姓名：{this.state.userName}</p>
                <p>电话：{this.state.tel}</p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const thisState = state.activation;
    return {
        userName: thisState.userName,
        tel: thisState.tel
    }
}
export default connect(mapStateToProps, {
    setUserName
})(HisWxMain);