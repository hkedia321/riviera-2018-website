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
import Footer from './Home/Footer';
import title from './../images/sponsors/pepsi.png';
import cosponsor from './../images/sponsors/silklogo.png';
import other1 from './../images/sponsors/maruti-suzuki.png';
import other2 from './../images/sponsors/cognizant.png';
import other3 from './../images/sponsors/talent.png';
import './sponsors.css';

class Sponsors extends React.Component{
  state={

  }
  componentDidMount(){
  }

  render(){
    return(
      <div className="sponsors-component">
        <Navbar fontColor='#fff'/>
        <div className="header-featured header-sponsors header-contact">
          <div className="overlay"></div>
          <h1 className="header-heading center text-white">Sponsors</h1>
        </div>
        <div className="below-header-content">
          <Grid fluid>
            <br/><br/><br/><br/>
            <Row>
              <Col xs={12} md={6} lg={4} lgOffset={2}>
                <Card className="contact-card hvr-underline-reveal reveal-blue" style={{background:'#232323',color:'#fff'}}>
                  <CardText
                    color='#fff'
                    style={{textAlign:'center'}}
                    >
                      <h1 className="center contactus-card-heading">Title Sponsor</h1>
                      <hr className="zigzag mini"/>
                      <img src={title} className="sponsor-img"/>
                    </CardText>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <Card className="contact-card hvr-underline-reveal reveal-lblue" style={{background:'#232323',color:'#fff'}}>
                    <CardText
                      color='#fff'
                      style={{textAlign:'center'}}
                      >
                        <h1 className="center contactus-card-heading">Co-Sponsor</h1>
                        <hr className="zigzag mini"/>
                        <img src={cosponsor} className="sponsor-img"/>
                      </CardText>
                    </Card>
                  </Col>
                </Row>
                <br/><br/><br/><br/>
                <Row>
                  <Col xs={12} md={12} lg={10} lgOffset={1}>
                    <Card className="contact-card hvr-underline-reveal reveal-green" style={{background:'#232323',color:'#fff'}}>
                      <CardText
                        color='#fff'
                        style={{textAlign:'center'}}
                        >
                          <h1 className="center contactus-card-heading">Other Sponsors</h1>
                          <hr className="zigzag mini"/>
                          <Row>
                            <Col xs={12} md={4}>
                              <img src={other1} className="sponsor-img"/>
                            </Col>
                            <Col xs={12} md={4}>
                              <img src={other2} className="sponsor-img"/>
                            </Col>
                            <Col xs={12} md={4}>
                              <img src={other3} className="sponsor-img"/>
                            </Col>
                          </Row>

                        </CardText>
                      </Card>
                    </Col>
                    </Row>
            </Grid>
            <br/><br/><br/><br/>
            <Footer/>
          </div>
        </div>
      )
    }
  }

  export default Sponsors
