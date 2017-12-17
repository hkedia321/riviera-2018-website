import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import medal23 from './../images/medal23.png';
class SingleEvent extends Component {
    render() {

        return (
            <div className="single-event-wrap">
                <br/><br/>
                <Grid>
                    <Row>
                        <Col xs={12} mdOffset={0} md={12}>
                            <Card className="single-event-card background-black text-white">
                                <Grid>
                                    <Row>
                                        <Col xs={12} md={8} className="event-card-left-part">
                                            <h1 className="margin-top-0">Treasure Hunt</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet rutrum diam. Maecenas at felis turpis. Vivamus eros nunc, pretium in facilisis sit amet, posuere non felis. Vestibulum tincidunt est maximus quam aliquam, non elementum leo pharetra. Nulla molestie lacus at cursus blandit. Maecenas egestas odio sem, in blandit augue vestibulum eu. Aliquam dapibus ante nec eros venenatis semper. Integer euismod dictum urna eget luctus. Morbi suscipit sollicitudin consequat.</p>
                                            <br/><br/>
                                            <div className="text-light text-bold">Organizer</div>
                                            <div className="">Innovators Quest</div>
                                            <br/><br/>
                                            <div className="text-light text-bold">Prizes</div>
                                            <br/>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <Row>
                                                        <Col xs={3} md={2}>
                                                            <img src={medal23} alt="medal" className="prize-medal"/>
                                                        </Col>
                                                        <Col xs={9} md={10}>
                                                            <div className="prize-content-right">
                                                                <div className="text-light text-bold">First Prize</div>
                                                                <div className="text-white text-size-20">Rs. 8,000</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Row>
                                                        <Col xs={3} md={2}>
                                                            <img src={medal23} alt="medal" className="prize-medal"/>
                                                        </Col>
                                                        <Col xs={9} md={10}>
                                                            <div className="prize-content-right">
                                                                <div className="text-light text-bold">First Prize</div>
                                                                <div className="text-white text-size-20">Rs. 8,000</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <br/><br/>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <Row>
                                                        <Col xs={3} md={2}>
                                                            <img src={medal23} alt="medal" className="prize-medal"/>
                                                        </Col>
                                                        <Col xs={9} md={10}>
                                                            <div className="prize-content-right">
                                                                <div className="text-light text-bold">First Prize</div>
                                                                <div className="text-white text-size-20">Rs. 8,000</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <Row>
                                                        <Col xs={3} md={2}>
                                                            <img src={medal23} alt="medal" className="prize-medal"/>
                                                        </Col>
                                                        <Col xs={9} md={10}>
                                                            <div className="prize-content-right">
                                                                <div className="text-light text-bold">First Prize</div>
                                                                <div className="text-white text-size-20">Rs. 8,000</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <br/><br/>
                                            <div className="text-light text-bold">Requirements</div>
                                            <div className="text-bold text-italic">No specific requirements for this event</div>
                                        </Col>
                                        <Col xs={12} md={4} style={{borderLeft:"1px solid #323232",padding:"0"}}>
                                            <div className="event-register-div">
                                                <RaisedButton label="Register" labelStyle={{fontWeight:"bold"}} className="background-white event-register-button text-bold" />
                                            </div>
                                            <div className="event-right-details">
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Price</span>
                                                    <div className="item-right-detail text-bold">Rs.80 / person</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Team / Single</span>
                                                    <div className="item-right-detail text-bold">Team of 3</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Date</span>
                                                    <div className="item-right-detail text-bold">2 Feb</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Timing</span>
                                                    <div className="item-right-detail text-bold">10 AM - 4 PM</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Location</span>
                                                    <div className="item-right-detail text-bold">SJT504</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Card>
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

export default connect(mapStateToProps,actions)(SingleEvent);
