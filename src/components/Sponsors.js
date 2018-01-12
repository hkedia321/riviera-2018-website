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
                          <h1 className="center card-heading">Previous Sponsors</h1>
                          <hr className="zigzag mini"/>
                          <Row>
                            
                            <Col xs={12} md={4}>
                              <Fade delay={300}>
                                <img src={cosponsor} className="sponsor-img"/>
                              </Fade>
                            </Col>
                            <Col xs={12} md={4}>
                             <Fade delay={300}>
                              <img src={other1} className="sponsor-img"/>
                            </Fade>
                            </Col>
                            <Col xs={12} md={4}>
                                 <Fade delay={450}>
                              <img src={other2} className="sponsor-img"/>
                          </Fade>
                            </Col>
                            <Col xs={12} md={4}>
                                 <Fade delay={600}>
                              <img src={other3} className="sponsor-img"/>
                          </Fade>
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
