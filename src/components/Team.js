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
import {Helmet} from 'react-helmet'
import saichandana from '../images/student-members/1.jpg';
import akashsinghkalhans from '../images/student-members/2.jpg';
import rishavraghav from '../images/student-members/3.jpg';
import kushalraghoria from '../images/student-members/4.jpg';
import anupamasingh from '../images/student-members/5.jpg';
import ujjawalsurana from '../images/student-members/6.jpg';
import antonyrajan from '../images/student-members/7.jpg';
import ashishchauhan from '../images/student-members/8.jpg';
import eshitasingh from '../images/student-members/9.jpg';
import anurag from '../images/student-members/10.jpg';
import pruthvigaddam from '../images/student-members/11.jpg';
import akhilreddy from '../images/student-members/12.jpg';
import vipulbaheti from '../images/student-members/13.jpg';
import apurvkumar from '../images/student-members/14.jpg';
import jayapriyav from '../images/student-members/15.jpg';
import abhisheksharma from '../images/student-members/16.jpg';
import nareshkumar from '../images/student-members/17.jpg';
import ashishkumar from '../images/student-members/18.jpg';
import karthikk from '../images/student-members/19.jpg';
import abhinandansuresh from '../images/student-members/20.jpg';
import tusharsingh from '../images/student-members/21.jpg';
import shylendarg from '../images/student-members/22.jpg';
import kiranjomy from '../images/student-members/23.jpg';
import abhijitsingh from '../images/student-members/24.jpg';
import tanmaykalra from '../images/student-members/25.jpg';

class Team extends React.Component{
  state={
    students:[
      {
        name:'Sai Chandana',
        image:saichandana
      },
      {
        name:'Akash Singh Kalhans',
        image:akashsinghkalhans
      },
      {
        name:'Rishav Raghav',
        image:rishavraghav
      },
      {
        name:'Kushal Raghoria',
        image:kushalraghoria
      },
      {
        name:'Anupama Singh',
        image:anupamasingh
      },
      {
        name:'Ujjwal Surana',
        image:ujjawalsurana
      },
      {
        name:'Antony Rajan',
        image:antonyrajan
      },
      {
        name:'Ashish Chauhan',
        image:ashishchauhan
      },
      {
        name:'Eshita Singh',
        image:eshitasingh
      },
      {
        name:'Anurag',
        image:anurag
      },
      {
        name:'Pruthvi Gaddam',
        image:pruthvigaddam
      },
      {
        name:'Akhil Reddy',
        image:akhilreddy
      },
      {
        name:'Vipul Baheti',
        image:vipulbaheti
      },
      {
        name:'Apurv Kumar',
        image:apurvkumar
      },
      {
        name:'Jayapriya V',
        image:jayapriyav
      },
      {
        name:'Abhishek Sharma',
        image:abhisheksharma
      },
      {
        name:'Naresh Kumar',
        image:nareshkumar
      },
      {
        name:'Ashish Kumar',
        image:ashishkumar
      },
      {
        name:'Karthik K',
        image:karthikk
      },
      {
        name:'Abhinandan Suresh',
        image:abhinandansuresh
      },
      {
        name:'Tushar Singh',
        image:tusharsingh
      },
      {
        name:'Shylendar G',
        image:shylendarg
      },
      {
        name:'Kiran Jomy',
        image:kiranjomy
      },
      {
        name:'Abhijit Singh',
        image:abhijitsingh
      },
      {
        name:'Tanmay Kalra',
        image:tanmaykalra
      }
    ]
  }
  render(){
    return(
      <div className='team-page'>
          <Helmet>
            <title>Team - VIT Riviera | 15th-18th February, 2018 | Vellore Institute of Technology</title>
          </Helmet>
        <Navbar fontColor='#fff'/>
        <div className="header-featured header-campus">
          <div>
            <div className="overlay"></div>
            <Fade delay={100}>
              <h1 className="header-heading center text-white">Team Riviera 2018</h1>
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
                      <Col xs={12} md={1} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>

                          <img src='svg/team/pvg.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Velmurugan G.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/psr.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Subashini R.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/psm.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Senthilkumar M</h1>
                        </CardText>
                      </Col>

                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/pscv.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Sudheer C.V.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          {/* FIXME: Get origial image */}
                          <img src='svg/team/pscv.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Seenivasan R.</h1>
                        </CardText>
                      </Col>
                    </Row>
                  </Card>
                </Fade>
                <Fade delay={300}>
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
                      <Col xs={12} md={1} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>

                          <img src='svg/team/pvg.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Velmurugan G.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/psr.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Subashini R.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/psm.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Senthilkumar M</h1>
                        </CardText>
                      </Col>

                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          <img src='svg/team/pscv.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Sudheer C.V.</h1>
                        </CardText>
                      </Col>
                      <Col xs={12} md={2} className='team-member'>
                        <CardText color='#fff' style={{textAlign:'center'}}>
                          {/* FIXME: Get origial image */}
                          <img src='svg/team/seenivasan.jpg'/>
                          <br/>
                          <h1 className="team-name">Prof. Seenivasan R.</h1>
                        </CardText>
                      </Col>
                    </Row>
                  </Card>
                </Fade>
              </Col>
            </Row>

            <Row>
              <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                <Fade delay={100}>
                  <Card className="contact-card hvr-underline-reveal reveal-red center text-white" style={{background:'#232323'}}>
                    <h1 className="card-heading">Student Convenors</h1>
                    <hr className="zigzag mini"/>
                    <Row>
                      {this.state.students.map((student)=>(
                        <Col xs={12} md={3} className='team-member'>
                          <CardText color='#fff' style={{textAlign:'center'}}>
                            <img src={student.image}/>
                            <br/>
                            <h1 className="team-name">{student.name}</h1>
                          </CardText>
                        </Col>
                      ))}
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
