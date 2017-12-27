import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import $ from 'jquery';
import * as actions from './../actions';
import './Home.css'

// Components
import Header from './Home/Header'
import Button from './Button'
import Featured from './Home/Featured'
import StudentAmbassador from './Home/StudentAmbassador'
import Footer from './Home/Footer'
import Countdown from './Home/Countdown'
import Navbar from './Navbar/Navbar'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () =>{
        $('html, body').animate({
        scrollTop: $("#featured").offset().top-120
    }, 500);
    }
    render() {
        return (
            <div className="homepage">

                <Navbar fontColor='#fff'/>

                {/* Header */}
                <Fade>
                <div className='full-width-column'>
                  <Header/>
                </div>
                </Fade>
                {/* Register Button */}
                <div className='register-button-container'>
                  <Button text='Know More' onClick={this.handleClick} style={{zIndex:10}}/>
                </div>
                {/* The Phenomenon and featured events */}
                <Featured id="featured"/>
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
