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
import Navbar from './Navbar/Navbar';
import Contacts from './Contactus/Contacts';
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
                <Navbar fontColor='#fff'/>
                <div className="header-featured header-contact">
                    <div className="overlay"></div>
                    <h1 className="header-heading center text-white">Contact Us</h1>
                </div>
                <div className="below-header-content">
                    <Contacts/>
                        <br/><br/><br/><br/>
                        <GMap/>
                        <br/><br/><br/><br/>
                        <Footer/>
                    </div>
                </div>
            )
        }
    }

    export default Contactus
