import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';

class SingleEvent extends Component {

    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div className="app-wrap">
                <h1>Pillow fight</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(SingleEvent);
