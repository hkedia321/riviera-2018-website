import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <Row>
          <Col sm={8} xs={12}>
            <h1>Stay Connected & Excited</h1>
            <h4 style={{position:'relative',top:'-10px'}}>#riviera18</h4>
          </Col>
          <Col sm={4} xs={12}>
            <Row>
              <Col xs={12} style={{padding:'10px'}}>
                <Link to='/sponsors'>View Sponsors</Link><br/>
              </Col>
              <Col xs={12} style={{padding:'10px'}}>
                <Link to='/team'>Riviera Team</Link><br/>
              </Col>
              <Col xs={12} style={{padding:'10px'}}>
                <Link to='/highlights'>Riviera '17 Highlights</Link><br/>
              </Col>
              <Col xs={12} style={{padding:'10px'}}>
                  <button>Register Now</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
