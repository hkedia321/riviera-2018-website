import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome'
import Button from './../Button'

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <Row>
          <Col sm={4} xs={12} style={{paddingLeft:'20px'}}>
            <h1 >Stay Connected & Excited</h1>
            <h4 style={{position:'relative',top:'-10px'}}>#riviera18</h4>
            <h4>
              <a href='https://www.facebook.com/rivieraVITUniversity/' target="_blank"><FontAwesome className="fa facebook-fa" name='facebook' style={{fontSize:'24px'}}/></a>
              <a href='https://www.instagram.com/rivieraVITUniversity/' target="_blank"><FontAwesome className="fa instagram-fa" name='instagram' style={{fontSize:'24px'}}/></a>
              {/* <a href='https://www.instagram.com/rivieraVITUniversity/'><img src='/instagram.png' style={{width:'50px'}}/></a> */}
            </h4>
          </Col>
          <Col xs={12} sm={4} className="center">
            <Link to="/">
            <img src='rivieralogo_cut.png' className='footer-logo'/>
          </Link>
          </Col>
          <Col sm={3} xs={12} smOffset={1} style={{textAlign:"center",paddingRight:"20px"}}>
            <Row>
              <Col xs={12} style={{paddingBottom:'10px'}}>
                <Link to='/sponsors'>
                <RaisedButton primary={true} style={{backgroundColor:"rgb(65, 64, 67)"}} label="View Sponsors" backgroundColor="rgb(65, 64, 67)" buttonStyle={{backgroundColor:"rgb(65, 64, 67)"}} labelStyle={{color:"#fff"}} /></Link><br/>
              </Col>
              <Col xs={12} style={{paddingTop:'10px'}}>
                  <a href='https://vtop9.vit.ac.in/riviera/' target="_blank">
                 <Button text='Register' style={{zIndex:10}}/>
              </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
