
import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions
} from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';
import Fade from 'react-reveal/Fade';
import {Row,Col,Grid} from 'react-flexbox-grid';

class Contacts extends React.Component{
    state={

    }
    componentDidMount(){
    }

    render(){
        return(
            <Grid fluid>
              <br/><br/><br/><br/>
                <Row>
                  <Col xs={12} md={6} lg={3}>
                    <Fade delay={200}>
                      <Card className="contact-card hvr-underline-reveal reveal-blue" style={{background:'#232323',color:'#fff'}}>
                          <CardText
                              color='#fff'
                              style={{textAlign:'center'}}
                              >
                                <h1 className="center contactus-card-heading">Registrations</h1>
                                <hr className="zigzag"/>
                                <h3 className="contact-name">Apurv Kumar</h3>
                                <h4 className="contact-mobile"><FontAwesome name='phone'/> 8939451788</h4>
                                <br/>
                                <h3 className="contact-name">Vipul Baheti</h3>
                                <h4 className="contact-mobile"><FontAwesome name='phone'/> 7639017722</h4>
                                  <h4 className="contact-email"><FontAwesome name='envelope'/> <a href="mailto:registration.riviera1@vit.ac.in" target="_blank">registration.riviera1@vit.ac.in</a></h4>
                              </CardText>
                          </Card>
                        </Fade>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <Fade delay={350}>
                          <Card className="contact-card hvr-underline-reveal reveal-lblue" style={{background:'#232323',color:'#fff'}}>
                              <CardText
                                  color='#fff'
                                  style={{textAlign:'center'}}
                                  >
                                    <h1 className="center contactus-card-heading">Events & Culturals</h1>
                                    <hr className="zigzag mini"/>
                                    <br/><br/>
                                    <h3 className="contact-name">Akash Singh Kalhans</h3>
                                    <h4 className="contact-mobile"><FontAwesome name='phone'/> 9944126133</h4>
                                    <br/><br/>
                                      <h4 className="contact-email"><FontAwesome name='envelope'/> <a href="mailto:events.riviera@vit.ac.in" target="_blank">events.riviera@vit.ac.in</a></h4>
                                  </CardText>
                              </Card>
                            </Fade>
                          </Col>
                          <Col xs={12} md={6} lg={3}>
                            <Fade delay={500}>
                              <Card className="contact-card hvr-underline-reveal reveal-red" style={{background:'#232323',color:'#fff'}}>
                                  <CardText
                                      color='#fff'
                                      style={{textAlign:'center'}}
                                      >
                                        <h1 className="center contactus-card-heading">Sports</h1>
                                        <hr className="zigzag mini"/>
                                        <h3 className="contact-name">Ashish Kumar</h3>
                                        <h4 className="contact-mobile"><FontAwesome name='phone'/> 9944941900</h4>
                                        <br/>
                                        <h3 className="contact-name">Siri Chandana</h3>
                                        <h4 className="contact-mobile"><FontAwesome name='phone'/> 9994116599</h4>
                                          <h4 className="contact-email"><FontAwesome name='envelope'/> <a href="mailto:sports.riviera@vit.ac.in" target="_blank">sports.riviera@vit.ac.in</a></h4>
                                      </CardText>
                                  </Card>
                                </Fade>
                              </Col>
                              <Col xs={12} md={6} lg={3}>
                                <Fade delay={650}>
                                  <Card className="contact-card hvr-underline-reveal reveal-green" style={{background:'#232323',color:'#fff'}}>
                                      <CardText
                                          color='#fff'
                                          style={{textAlign:'center'}}
                                          >
                                            <h1 className="center contactus-card-heading">Guest Care</h1>
                                            <hr className="zigzag mini"/>
                                            <h3 className="contact-name">Abhishek Sharma</h3>
                                            <h4 className="contact-mobile"><FontAwesome name='phone'/> 9994033789</h4>
                                            <br/>
                                            <h3 className="contact-name">V.Jayapriya</h3>
                                            <h4 className="contact-mobile"><FontAwesome name='phone'/> 8056116662</h4>
                                              <h4 className="contact-email"><FontAwesome name='envelope'/> <a href="mailto:gc.riviera1@vit.ac.in" target="_blank">gc.riviera1@vit.ac.in</a></h4>
                                          </CardText>
                                      </Card>
                                    </Fade>
                                  </Col>
                    </Row>
                </Grid>
            )
        }
    }

    export default Contacts
