import React, {Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography'

import {Header, Footer} from './Layouts';
import Exercises from './Exercises'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Exercises/>
                <Footer/>
            </Fragment>
        );
    }
}
 