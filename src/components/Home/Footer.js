import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome'
import DevelopersDialog from './DevelopersDialog';
import Button from './../Button'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dialogOpen:false
        }
    }
    render(){
        return(
            <footer>
                <DevelopersDialog dialogOpen={this.state.dialogOpen} handleDialogClose={()=>this.setState({dialogOpen:false})} />
                <Row>
                    <Col xs={12} md={9} className="footer-left-col">
                        <Row>
                            <Col xs={12}>
                                <h1 style={{marginBottom:"0px"}}>Stay Connected & Excited</h1>
                                <h4 style={{marginTop:"10px"}}>#riviera18</h4>
                                <h4>
                                    <a href='https://www.facebook.com/rivieraVITUniversity/' target="_blank"><FontAwesome className="fa facebook-fa" name='facebook' style={{fontSize:'24px'}}/></a>
                                    <a href='https://www.instagram.com/rivieraVITUniversity/' target="_blank"><FontAwesome className="fa instagram-fa" name='instagram' style={{fontSize:'24px'}}/></a>
                                    {/* <a href='https://www.instagram.com/rivieraVITUniversity/'><img src='/instagram.png' style={{width:'50px'}}/></a> */}
                                </h4>
                                <RaisedButton onClick={()=>this.setState({dialogOpen:true})} primary={true} style={{backgroundColor:"rgba(0,0,0,0)"}} label="View Developers" backgroundColor="rgba(0,0,0,0)" buttonStyle={{backgroundColor:"rgba(0,0,0,0)"}} labelStyle={{color:"#fff",textTransform:"capitalize"}} />
                            </Col>
                        </Row>
                        <Row className="copyright-row">
                            <Col xs={12} md={9} mdOffset={3} className="center">
                                <span className="copyrighttext">Copyright © 2018</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} className="footer-right-col">
                        <br className="laptop-only-br"/>
                        <Link to='/sponsors'>
                        <RaisedButton primary={true} style={{backgroundColor:"rgba(0,0,0,0)"}} label="View Sponsors" backgroundColor="rgba(0,0,0,0)" buttonStyle={{backgroundColor:"rgba(0,0,0,0)"}} labelStyle={{color:"#fff",textTransform:"capitalize"}} />
                    </Link>
                    <Link to='/campus-ambassador'>
                      <RaisedButton primary={true} style={{backgroundColor:"rgba(0,0,0,0)"}} label="Campus Ambassador Program" backgroundColor="rgba(0,0,0,0)" buttonStyle={{backgroundColor:"rgba(0,0,0,0)"}} labelStyle={{color:"#fff",textTransform:"capitalize"}} />
                    </Link>
                    <a href='https://www.youtube.com/watch?v=qMYNRDx19EM'>
                      <RaisedButton primary={true} style={{backgroundColor:"rgba(0,0,0,0)"}} label="Riviera '17 Highlights" backgroundColor="rgba(0,0,0,0)" buttonStyle={{backgroundColor:"rgba(0,0,0,0)"}} labelStyle={{color:"#fff",textTransform:"capitalize"}} />
                    </a>
                    <br/>

                    <a href='https://vtop9.vit.ac.in/riviera/' target="_blank">
                    <Button noRevealAnimation={true} text='Register' style={{zIndex:10}}/>
                </a>
            </Col>
            <Col className="copyright-mobile-col center" xs={12}>
                <span className="copyrighttext">Copyright © 2018</span>
            </Col>
        </Row>
    </footer>
)
}
}

export default Footer
