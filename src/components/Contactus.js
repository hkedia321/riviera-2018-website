/**
* Created by rahul on 16/12/17.
*/
import React from 'react'
import axios from 'axios';
import {
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';
import {Row,Col,Grid} from 'react-flexbox-grid'
import Fade from 'react-reveal/Fade';
import Navbar from './Navbar/Navbar';
import Contacts from './Contactus/Contacts';
import {Helmet} from 'react-helmet'
import GMap from './Contactus/GMap';
import Footer from './Home/Footer';
import './contactus.css';

class Contactus extends React.Component{
    state={

    }
    componentDidMount(){
    }

    render(){
        return(
            <div className="contact-us-component">
                <Helmet>
                  <title>Contact us - VIT Riviera | 15th-18th February, 2018 | Vellore Institute of Technology</title>
                </Helmet>
                <Navbar fontColor='#fff'/>
                <div className="header-featured header-contact">
                    <div className="overlay"></div>
                    <Fade delay={100}>
                    <h1 className="header-heading center text-white">Contact Us</h1>
                    </Fade>
                </div>
                <div className="below-header-content">
                    <Contacts/>
                        <br/><br/><br/><br/>
                        <Fade delay={200}>
                        <GMap/>
                      </Fade>
                        <br/><br/><br/><br/>
                        <Footer/>
                    </div>
                </div>
            )
        }
    }

    export default Contactus
