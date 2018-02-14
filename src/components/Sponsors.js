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
import Fade from 'react-reveal/Fade';
import Footer from './Home/Footer';
import title from './../images/sponsors/pepsi.png';
import {Helmet} from 'react-helmet'
import marutisuzuki from './../images/sponsors/maruti-suzuki.png';
import talent from './../images/sponsors/talent.png';
import byjus from './../images/sponsors/byjus-logo.png'
import canara from './../images/sponsors/canara-bank.jpg'
import comedy from './../images/sponsors/comedy-central-logo.png'
import lakme from './../images/sponsors/lakme.png'
import maruti from './../images/sponsors/coy.png'
import meena from './../images/sponsors/meena-ads-logo.png'
import paytm from './../images/sponsors/paytm-logo.png'
import sbi from './../images/sponsors/sbi-logo.png'
import hindu from './../images/sponsors/the-hindu-logo.png'
import toi from './../images/sponsors/times-of-india-logo.jpg'
import vh1 from './../images/sponsors/vh1-logo.jpg'
import airtel from './../images/sponsors/airtel-logo.jpg'
import visionhire from './../images/sponsors/vision-hire.png'
import './sponsors.css';
import sponsors1 from './../images/sponsors-1.png'
import sponsors2 from './../images/sponsors-2.png'

class Sponsors extends React.Component{
  state={

  }
  componentDidMount(){
  }

  render(){
    return(
      <div className="sponsors-component">
          <Helmet>
            <title>Sponsors - VIT Riviera | 15th-18th February, 2018 | Vellore Institute of Technology</title>
          </Helmet>
        <Navbar fontColor='#fff'/>
        <div className="header-featured header-sponsors header-contact">
          <div className="overlay"></div>
          <Fade delay={100}>
          <h1 className="header-heading center text-white">Sponsors</h1>
        </Fade>
        </div>
        <div className="below-header-content">
          <Grid fluid>
            <br/><br/><br/><br/>
                <Row>
                  <Col xs={12} md={12} lg={10} lgOffset={1}>
                    <Fade delay={200}>
                      <Card className="contact-card hvr-underline-reveal reveal-green" style={{background:'#232323',color:'#fff'}}>
                        <CardText
                          color='#fff'
                          style={{textAlign:'center'}}
                          >
                            <h1 className="center card-heading">Title Sponsor</h1>
                            <hr className="zigzag mini"/>
                            <Row>
                              <Col xs={12} md={12}>
                                <Fade delay={300}>
                                  <img src={title} className="sponsor-img"/>
                                </Fade>
                              </Col>
                            </Row>
                          </CardText>
                        </Card>
                    </Fade>
                  </Col>
                </Row>
                <br/><br/><br/><br/>
                <Row>
                  <Col xs={12} md={12} lg={10} lgOffset={1}>
                       <Fade delay={200}>
                    <Card className="contact-card hvr-underline-reveal reveal-green" style={{background:'#232323',color:'#fff'}}>
                      <CardText
                        color='#fff'
                        style={{textAlign:'center'}}
                        >
                          <h1 className="center card-heading">Other Sponsors</h1>
                          <hr className="zigzag mini"/>
                          <h4>Marathon Partner</h4>
                          <img src={talent}/>
                          <h4>Telecom Partner</h4>
                          <img src={airtel} style={{width:'50%'}}/>
                          <h4>Media Partners</h4>
                          <Row>
                              <Col md={6}>
                                  <img src={hindu}/>
                              </Col>
                              <Col md={6}>
                                  <img src={toi} style={{width:'70%'}}/>
                              </Col>
                          </Row>
                          <h4>Comedy Night Partner</h4>
                          <img src={comedy} style={{width:'30%'}}/>
                          <h4>EDM Night Sponsor</h4>
                          <img src={vh1}/>
                          <h4>Proshow Day 1 Sponsor</h4>
                          <img src={maruti}/>
                          <hr className="zigzag mini"/>
                          <Row className={'other-sponsers'}>
                              <Col md={4} style={{padding:'10px'}}>
                                  <img src={canara} className={'sponsor-img'}/>
                              </Col>
                              <Col md={4} style={{padding:'10px'}}>
                                  <img src={byjus} className={'sponsor-img'}/>
                              </Col>
                              <Col md={4} style={{padding:'10px'}}>
                                  <img src={sbi} className={'sponsor-img'}/>
                              </Col>
                              <Col md={4}>
                                  <img src={visionhire} className={'sponsor-img'}/>
                              </Col>
                              <Col md={4} style={{padding:'10px'}}>
                                    <img src={meena} className={'sponsor-img'}/>
                              </Col>
                              <Col md={4} style={{padding:'10px'}}>
                                    <img src={lakme} className={'sponsor-img'}/>
                              </Col>
                              <Col md={4}>

                              </Col>
                              <Col md={4} style={{padding:'10px'}}>
                                  <img src={paytm} className={'sponsor-img'}/>
                              </Col>
                          </Row>
                        </CardText>
                      </Card>
                  </Fade>
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


// Change the header image in Events whenever a category is selected.
//
