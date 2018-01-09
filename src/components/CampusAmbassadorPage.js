import React from 'react'
import Navbar from './Navbar/Navbar'
import Fade from 'react-reveal/Fade';
import './CampusAmbassadorPage.css';
import {
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions
} from 'material-ui/Card';
import {Row,Col} from 'react-flexbox-grid'
import Footer from './Home/Footer';
import {Table,TableBody,TableRow,TableHeaderColumn,TableRowColumn} from 'material-ui/Table'
import Button from './Button'
import {Helmet} from 'react-helmet'

class CampusAmbassadorPage extends React.Component{
  render(){
    return(
      <div className='campus-ambassador-page'>
          <Helmet>
            <title>Campus Ambassador - VIT Riviera | 15th-18th February, 2018 | Vellore Institute of Technology</title>
          </Helmet>
        <Navbar fontColor='#fff'/>
        <div className="header-featured header-campus">
          <div>
            <div className="overlay"></div>
            <Fade delay={100}>
            <h1 className="header-heading center text-white">Campus Ambassador</h1>
            </Fade>
            <Fade delay={200}>
            <h3 className="center header-subheading">The best event to get the word out there!</h3>
            </Fade>
          </div>
        </div>
        <br/><br/><br/>
        <Row>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
            <Fade>
            <Card className="" style={{background:'#232323',color:'#fff'}}>
                           <CardText
                               color='#fff'
                               style={{textAlign:'justify',lineHeight: "1.2rem"}}
                               >
              <h4 style={{fontWeight:'300'}}>
                The Campus Ambassador Program is a scheme to boost "off-campus" publicity for Riviera'18.
                <span style={{fontWeight:'700'}}> The student representative from each college who fetch the maximum registrations as mentioned underneath (tabular form) shall be rewarded with incentives during Riviera'18.</span>
                The ambassador is held responsible for facilitating the participation of students from his/her college in Riviera.
                These incentives and the associated registration requirements are tabulated below:</h4>

          </CardText>
        </Card>
      </Fade>
            <div className='table-container'>
              <Fade>
              <Table
                selectable={false}
                style={{background:'#232323',width:'100%',margin:'20px'}}
                >
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableHeaderColumn colSpan="3" tooltip="Colleges within Tamil Nadu (Zone 1)" style={{textAlign: 'center'}}>
                        <span style={{fontWeight:'bold',color:'#fff',fontSize:'16px'}}>Colleges within Tamil Nadu (Zone 1)<br/>(Incentives are only for campus ambassador)</span>
                      </TableHeaderColumn>
                    </TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'>
                      <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                    </TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>25-50 registrations</TableRowColumn> <TableRowColumn>50-75 registrations</TableRowColumn><TableRowColumn> Above 75 registrations</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>One way fare<br/>(for campus ambassador only)</TableRowColumn> <TableRowColumn>One way fare<br/>(for campus ambassador only)</TableRowColumn> <TableRowColumn>Two way fare<br/>(for campus ambassador only)</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>4 days accommodation</TableRowColumn> <TableRowColumn>4 days accommodation</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                    <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                  </TableBody>
                </Table>
              </Fade>
              </div>

              <div className='table-container'>
                <Fade>
                <Table
                  selectable={false}
                  style={{background:'#232323',width:'100%',margin:'20px'}}
                  >
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Colleges from Andhra, Telangana, Kerala and Karnataka (Zone 2)" style={{textAlign: 'center'}}>
                          <span style={{fontWeight:'bold',color:'#fff',fontSize:'16px'}}>Colleges from Andhra, Telangana, Kerala and Karnataka (Zone 2)<br/>(Incentives are only for campus ambassador)</span>
                        </TableHeaderColumn>
                      </TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'>
                        <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                      </TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>20-30 registrations</TableRowColumn> <TableRowColumn>31-50 registrations</TableRowColumn><TableRowColumn> Above 50 registrations</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>One way fare<br/>(for campus ambassador only)</TableRowColumn> <TableRowColumn>One way fare<br/>(for campus ambassador only)</TableRowColumn> <TableRowColumn>Two way fare<br/>(for campus ambassador only)</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>4 days accommodation</TableRowColumn> <TableRowColumn>4 days accommodation</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                    </TableBody>
                  </Table>
                </Fade>
                </div>


                <div className='table-container'>
                  <Fade>
                  <Table
                    selectable={false}
                    style={{background:'#232323',width:'100%',margin:'20px'}}
                    >
                      <TableBody displayRowCheckbox={false}>
                        <TableRow>
                          <TableHeaderColumn colSpan="3" tooltip="Colleges From other parts of North India (Zone 3)" style={{textAlign: 'center'}}>
                            <span style={{fontWeight:'bold',color:'#fff',fontSize:'16px'}}>Colleges From other parts of North India (Zone 3)<br/>(Incentives are only for campus ambassador)</span>
                          </TableHeaderColumn>
                        </TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'>
                          <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                          <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                          <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                        </TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>10-15 registrations</TableRowColumn> <TableRowColumn>16-25 registrations</TableRowColumn><TableRowColumn> Above 25 registrations</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>One way fare<br/>(for campus ambassador only)</TableRowColumn> <TableRowColumn>One way fare<br/>(for campus ambassador only)</TableRowColumn> <TableRowColumn>Two way fare<br/>(for campus ambassador only)</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>4 days accommodation</TableRowColumn> <TableRowColumn>4 days accommodation</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                      </TableBody>
                    </Table>
                  </Fade>
                  </div>
                  <br/><br/>
                  <Fade>
                  <Card className="" style={{background:'#232323',color:'#fff'}}>
                                 <CardText
                                     color='#fff'
                                     style={{textAlign:'left',lineHeight: "1.2rem"}}
                                     >
                  <div className='rules-container'>
                    <h3 className="text-bold">DUTIES OF CAMPUS AMBASSADOR</h3>
                    <ol>
                      <li>Campus ambassadors are to act as the link between the Riviera Team and the concerned college administration and facilitate student participation during Riviera'18 (15th-18th February) at VIT, Vellore.</li>
                      <li>Be updated with Riviera ’18 happenings.</li>
                      <li>To publicize and promote Riviera’18 by all possible means.</li>
                      <li>They are required to share posters and other happenings of Riviera’18 through social media networks.</li>
                    </ol>
                  </div>
                </CardText>
              </Card>
            </Fade>
                    <br/><br/>
                    <Fade>
                    <Card className="" style={{background:'#232323',color:'#fff'}}>
                                   <CardText
                                       color='#fff'
                                       style={{textAlign:'left',lineHeight: "1.2rem"}}
                                       >
                    <h3 className="text-bold">TERMS AND CONDITIONS</h3>
                    <ol>
                      <li>The final decision of allotting the zone and category rests with the Riviera’18 team.</li>
                      <li>Any kind of indiscipline caused by the ambassador during or before the fest will lead to severe disciplinary actions.</li>
                      <li>The travel ticket should be booked in the name of the ambassador to claim the refund. The travel fares, as mentioned, entail train tickets of the 2 nd class compartments to all respective destinations from Vellore. (Maximum amount is INR 500 one way for Zone 1, INR 750 one way for Zone 2 and INR 1000 one way for Zone 3 and twice the amount for two way fares.)</li>
                      <li>The travel expenses will be redeemed on the fourth day of the fest on submission of the ticket.</li>
                      <li>As a proof of registrations the student ambassador needs to maintain a record of the details of registered students, in a format described by the Riviera’18 team.</li>
                      <li>Each individual external entry shall be counted as one registration. </li>
                      <li>Ambassadors are entitled to 3-day accommodation in the VIT hostels. No refund shall be provided if outside accommodation is acquired.</li>
                      <li>The fest entry fee of INR 200 shall be waived for all the Campus ambassadors.</li>
                      <li>Any permissions needed to market the Riviera in their college shall be taken care by the Student Ambassador, given that the Riviera’18 Team shall provide whatever help is necessary from their side.</li>
                      <li>All decisions regarding the Campus ambassadors lay solely in the hands of the Riviera&#39;18 team.</li>
                    </ol>
                  </CardText>
                </Card>
              </Fade>
                </Col>
              </Row>
              <br/><br/>
              <Row style={{marginTop:'200px'}}>
                <Col xs={12}>
                  <div className='register-button-container'>
                    <a href='https://vtop9.vit.ac.in/riviera/'><Button text='Enroll Now'/></a>
                  </div>
                </Col>
              </Row>
              <Footer/>
            </div>
          )
        }
      }

      export default CampusAmbassadorPage
