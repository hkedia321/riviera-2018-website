import React from 'react'
import Navbar from './Navbar/Navbar'
import Fade from 'react-reveal/Fade'
import {Row,Col,Grid} from 'react-flexbox-grid'
import './Team/Team.css'
import {
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions
} from 'material-ui/Card';
import Footer from './Home/Footer';

class Team extends React.Component{
  render(){
    return(
      <div className='team-page'>
        <Navbar fontColor='#fff'/>
        <div className="header-featured header-campus">
          <div>
            <div className="overlay"></div>
            <Fade delay={100}>
              <h1 className="header-heading center text-white">Team Riviera'18</h1>
            </Fade>
            <Fade delay={200}>
              <h3 className="center header-subheading">The people who make it happen!</h3>
            </Fade>
          </div>
        </div>
        <div className="below-header-content">
          <Grid fluid>
            <br/><br/><br/><br/>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={4} className='team-member'>
                <Fade delay={100}>
                  <Card className="contact-card hvr-underline-reveal reveal-blue" style={{background:'#232323'}}>
                    <CardText color='#fff' style={{textAlign:'center'}}>
                      <h1 className="card-heading">Our Patron</h1>
                      <hr className="zigzag mini"/>
                      <img src='svg/team/gv.png'/>
                      <br/>
                      <h1 className="team-name">Dr. G. Viswanathan</h1>
                      <h2 className="team-title">Chancellor & Founder VIT</h2>
                    </CardText>
                  </Card>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
                <Fade delay={100}>
                  <Card className="contact-card hvr-underline-reveal reveal-lblue center text-white" style={{background:'#232323'}}>
                    <h1 className="card-heading">Our Co-Patrons</h1>
                    <hr className="zigzag mini"/>
                    <Row>
                      <Col xs={12} md={4} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>

                          <img src='svg/team/ShankarV.png'/>
                          <br/>
                          <h1 className="team-name">Mr. Sankar Viswanathan</h1>
                          <h2 className="team-title">Vice President, VIT</h2>
                        </CardText>
                      </Col>
                      <Col xs={12} md={4} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/shekharv.jpg'/>
                          <br/>
                          <h1 className="team-name">Dr. Sekar Viswanathan</h1>
                          <h2 className="team-title">Vice President, VIT</h2>
                        </CardText>
                      </Col>
                      <Col xs={12} md={4} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/gvs.jpg'/>
                          <br/>
                          <h1 className="team-name">Mr. G. V. Selvam</h1>
                          <h2 className="team-title">Vice President, VIT</h2>
                        </CardText>
                      </Col>

                      <Col xs={12} md={4} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/AAS.png'/>
                          <br/>
                          <h1 className="team-name">Dr. Anand A. Samuel</h1>
                          <h2 className="team-title">Vice Chancellor, VIT</h2>
                        </CardText>
                      </Col>
                      <Col xs={12} md={4} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/VR.png'/>
                          <br/>
                          <h1 className="team-name">Dr. V. Raju</h1>
                          <h2 className="team-title">Pro-Vice Chancellor, VIT</h2>
                        </CardText>
                      </Col>
                      <Col xs={12} md={4} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/SN.png'/>
                          <br/>
                          <h1 className="team-name">Dr. S. Narayanan</h1>
                          <h2 className="team-title">Pro-Vice Chancellor, VIT</h2>
                        </CardText>
                      </Col>
                    </Row>
                  </Card>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col xs={10} xsOffset={1} md={4} mdOffset={4} className='team-member'>
                <Fade delay={100}>
                  <Card className="contact-card hvr-underline-reveal reveal-green" style={{background:'#232323'}}>
                    <CardText color='#fff' style={{textAlign:'center'}}>
                      <h1 className="card-heading">Convenor</h1>
                      <hr className="zigzag mini"/>
                      <img src='svg/team/pss.jpg'/>
                      <br/>
                      <h1 className="team-name">Prof. Sasikumar S</h1>
                    </CardText>
                  </Card>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                <Fade delay={100}>
                  <Card className="contact-card hvr-underline-reveal reveal-red center text-white" style={{background:'#232323'}}>
                    <h1 className="card-heading">Co-Convenors</h1>
                    <hr className="zigzag mini"/>
                    <Row>
                      <Col xs={12} md={3} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>

                          <img src='svg/team/pvg.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Velmurugan G.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={3} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/deepam.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Deepa M.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={3} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/psm.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Senthilkumar M</h1>
                        </CardText>
                      </Col>

                      <Col xs={12} md={3} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/pscv.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Sudheer C.V.</h1>
                        </CardText>
                      </Col>
                    </Row>
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

export default Team
