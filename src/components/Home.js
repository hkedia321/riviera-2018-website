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
import Navbar from './Navbar/Navbar.js'
import Header from './Home/Header'
import Button from './Button'
import Featured from './Home/Featured'
import StudentAmbassador from './Home/StudentAmbassador'
import Footer from './Home/Footer'
import Countdown from './Home/Countdown'

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="homepage">
                {/* Navbar */}
                  <div className='full-width-column'>
                    <Navbar fontColor='#fff'/>
                  </div>
                {/* Header */}
                <div className='full-width-column'>
                  <Header/>
                </div>
                {/* Register Button */}
                <div className='register-button-container'>
                  <Button text='Register' style={{zIndex:10}}/>
                </div>
                {/* The Phenomenon and featured events */}
                <Featured/>
                {/* Student Ambassador */}
                <StudentAmbassador/>
                {/* Countdown */}
                <Countdown/>
                {/* Footer */}
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(Home);
