import React from 'react'
import Navbar from './Navbar/Navbar'
import './CampusAmbassadorPage.css'
import {Row,Col} from 'react-flexbox-grid'
import {Table,TableBody,TableRow,TableHeaderColumn,TableRowColumn} from 'material-ui/Table'

class CampusAmbassadorPage extends React.Component{
  render(){
    return(
      <div className='campus-ambassador-page'>
        <Navbar/>
        <div style={{textAlign:'center'}} className='header'>
          <h1>Campus Ambassador</h1>
          <h3>The best program to get the word out there!</h3>
        </div>
          <Row>
            <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
              <p className='description'>
              The Campus Ambassador Program is a scheme to boost off-campus publicity for Riviera 2018. A maximum of one student representative from each college is deemed as an ambassador. The ambassador is held responsible for facilitating the participation of students from his/her college in Riviera. Ambassadors who fetch a sizeable number of registrations from their colleges shall be awarded with a number of incentives in Riviera&#39;18. These incentives and the associated registration requirements are tabulated below:
              </p>
                <div className='table-container'>
                  <Table
                    selectable={false}
                    style={{background:'#2D2D2D',width:'95%',margin:'20px'}}
                    >
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Colleges within Tamil Nadu (Zone 1)" style={{textAlign: 'center'}}>
                          Colleges within Tamil Nadu (Zone 1)
                        </TableHeaderColumn>
                      </TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'>
                        <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                      </TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>35-50 registrations</TableRowColumn> <TableRowColumn>50-75 registrations</TableRowColumn><TableRowColumn> Above 75 registrations</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>Two way fare</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>4 days&#39; accommodation</TableRowColumn> <TableRowColumn>4 days&#39; accommodation</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className='table-container'>
                  <Table
                    selectable={false}
                    style={{background:'#2D2D2D',width:'95%',margin:'20px'}}
                    >
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Colleges from Andhra, Telangana, Kerala and Karnataka (Zone 2)" style={{textAlign: 'center'}}>
                          Colleges from Andhra, Telangana, Kerala and Karnataka (Zone 2)
                        </TableHeaderColumn>
                      </TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'>
                        <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                      </TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>20-30 registrations</TableRowColumn> <TableRowColumn>31-50 registrations</TableRowColumn><TableRowColumn> Above 50 registrations</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>Two way fare</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>4 days&#39; accommodation</TableRowColumn> <TableRowColumn>4 days&#39; accommodation</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                    </TableBody>
                  </Table>
                </div>


                <div className='table-container'>
                  <Table
                    selectable={false}
                    style={{background:'#2D2D2D',width:'95%',margin:'20px'}}
                    >
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip="Colleges From other parts of North India (Zone 3)" style={{textAlign: 'center'}}>
                          Colleges From other parts of North India (Zone 3)
                        </TableHeaderColumn>
                      </TableRow>
                      <TableRow style={{color:'#fff'}} className='table-row'>
                        <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                        <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                      </TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>10-15 registrations</TableRowColumn> <TableRowColumn>16-25 registrations</TableRowColumn><TableRowColumn> Above 25 registrations</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>Two way fare</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>4 days&#39; accommodation</TableRowColumn> <TableRowColumn>4 days&#39; accommodation</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                        <TableRow style={{color:'#fff'}} className='table-row'><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className='rules-container'>
                  <h3 style={{color:'#000'}}>DUTIES OF CAMPUS AMBASSADOR</h3>
                  <ol>
                    <li>Campus ambassadors are to act as the link between the Riviera Team and the concerned college administration and facilitate student communication.</li>
                    <li>Be updated with Riviera ’18 happenings.</li>
                    <li>To publicize and promote Riviera’18 by all possible means.</li>
                    <li>They are required to share posters and other happenings of Riviera’18 through social media networks.</li>
                  </ol>
                  <br/><br/>
                  <h3 style={{color:'#000'}}>TERMS AND CONDITIONS</h3>
                  <ol>
                    <li>Only 1 campus ambassador per college is permitted.</li>
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
                </div>
            </Col>
          </Row>
        </div>
    )
  }
}

export default CampusAmbassadorPage
