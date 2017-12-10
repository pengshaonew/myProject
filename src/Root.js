/**
 * Created by lwj on 2017/4/27.
 */
import React from 'react'
import {Provider} from 'react-redux'
import HisMobile from './HisMobile'

export default class Root extends React.Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <HisMobile/>
            </Provider>
        )
    }
}
