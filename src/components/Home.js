import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';
import './Home.css'

// Components
import Navbar from './Navbar'
import Header from './Home/Header'
import Button from './Button'

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="homepage">
                <Navbar fontColor='#fff'/>
                {/* Navbar */}
                {/* Header */}
                <Header/>
                {/* Register Button */}
                <div className='register-button-container'>
                  <Button text='Register' style={{zIndex:10}}/>
                </div>
                {/* The Phenomenon and featured events */}
                {/* Student Ambassador */}
                {/* Footer */}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(Home);
