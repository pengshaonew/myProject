import React from 'react';
import {Route, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import history from './history'
import HisWxMain from './containers/Activation';

class HisMobile extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={HisWxMain}/>
            </Router>
        )
    }
}

const mapStateToAppProps = (state, ownProps) => {
    return {}
};
export default connect(mapStateToAppProps)(HisMobile);
