import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import {Card} from 'material-ui/Card';
import Navbar from './../Navbar/Navbar.js'
import RaisedButton from 'material-ui/RaisedButton';
import Selena from './../../images/selena.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './proshows.css';
import ProshowsNavbar from './ProshowsNavbar';
class Proshows extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentTab:1
        }
    }
    handleTabChange = (x) =>{
        this.setState({
            currentTab:x
        })
    }
    render() {

        return (
            <div className="proshows-component">
                <Navbar fontColor='#fff'/>
                <Grid fluid className="padding-0">
                    <Row>
                        <Col className="padding-0" xs={12} md={6}>
                            <img src={Selena} alt="" className="proshow-star-img" />
                        </Col>
                        <Col xs={12} md={6} className="proshow-col">
                            <ProshowsNavbar handleTabChange={this.handleTabChange} tab={this.state.currentTab} />
                            <h1 className="proshow-star-name">Selena Gomez</h1>
                            <p className="proshow-para text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(Proshows);
