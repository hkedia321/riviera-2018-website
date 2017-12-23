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
                    <TableRow style={{color:'#fff'}}>
                      <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                    </TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>35-50 registrations</TableRowColumn> <TableRowColumn>50-75 registrations</TableRowColumn><TableRowColumn> Above 75 registrations</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>Two way fare</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>4 days&#39; accommodation</TableRowColumn> <TableRowColumn>4 days&#39; accommodation</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                  </TableBody>
                </Table>

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
                    <TableRow style={{color:'#fff'}}>
                      <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                    </TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>20-30 registrations</TableRowColumn> <TableRowColumn>31-50 registrations</TableRowColumn><TableRowColumn> Above 50 registrations</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>Two way fare</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>4 days&#39; accommodation</TableRowColumn> <TableRowColumn>4 days&#39; accommodation</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                  </TableBody>
                </Table>

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
                    <TableRow style={{color:'#fff'}}>
                      <TableRowColumn style={{fontWeight:'bold'}}>Gold</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Diamond</TableRowColumn>
                      <TableRowColumn style={{fontWeight:'bold'}}>Platinum</TableRowColumn>
                    </TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>10-15 registrations</TableRowColumn> <TableRowColumn>16-25 registrations</TableRowColumn><TableRowColumn> Above 25 registrations</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>One way fare</TableRowColumn> <TableRowColumn>Two way fare</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn> <TableRowColumn>Certificate &amp; tag</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn>Post on Riviera page</TableRowColumn> <TableRowColumn>Post on Riviera page </TableRowColumn><TableRowColumn>Post on Riviera page</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>4 days&#39; accommodation</TableRowColumn> <TableRowColumn>4 days&#39; accommodation</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>Food coupons</TableRowColumn> <TableRowColumn>Food coupons</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn>Goodies</TableRowColumn> <TableRowColumn>Goodies</TableRowColumn></TableRow>
                      <TableRow style={{color:'#fff'}}><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn> <TableRowColumn>Proshow passes for all 4 days</TableRowColumn></TableRow>
                  </TableBody>
                </Table>
            </Col>
          </Row>
        </div>
    )
  }
}

export default CampusAmbassadorPage
