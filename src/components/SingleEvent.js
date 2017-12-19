import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import medal23 from './../images/medal23.png';
import FontAwesome from 'react-fontawesome'

import axios from 'axios'

class SingleEvent extends Component {
    state={
      events:[],
      currentEvent:{}
    }
    componentDidMount(){
      const location=window.location.pathname.split('/')
      console.log(window.location)
      const category=location[2]
      const event_name=location[3]
      this.setState({
        loading:true
      })
      axios({
        method:'get',
        url:`https://riviera18.herokuapp.com/?event_category=${category}`
      }).then((response)=>{
        console.log(response.data)
        this.setState({
          loading:false,
          events:response.data.event_list.filter((event)=>{
            console.log(event['EVENT NAME'],event_name.replace(/%20/g, " "),(event['EVENT NAME'])===event_name.replace(/%20/g, " "))
            return event['EVENT NAME']===event_name.replace(/%20/g, " ")
          })
        })
      })
    }
    render() {
        console.log(this.state)
        return (
            <div className="single-event-wrap">
                <br/><br/>
                {this.state.loading&&
                  <div style={{textAlign:'center'}}>Loading...</div>
                }
                {this.state.events.map((event)=>(
                <div key={event['EVENT NAME']}>
                <Grid>
                    <Row>
                        <Col xs={12} mdOffset={0} md={12}>
                            <Card className="single-event-card background-black text-white">
                                <Grid>
                                    <Row>
                                        <Col xs={12} md={8} className="event-card-left-part">
                                            <h1 className="margin-top-0">{event['EVENT NAME']}</h1>
                                            <p>{event['DESCRIPTION']}</p>
                                            <br/><br/>
                                            <div className="text-light text-bold">Organizer</div>
                                            <div className="">{event['CLUB NAME']}</div>
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
                                                                <div className="text-light text-bold">Prize Money</div>
                                                                <div className="text-white text-size-20">Rs. {event['Prize Money']}</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                {/* <Col xs={12} md={6}>
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
                                                </Col> */}
                                            </Row>
                                            <br/><br/>
                                            {/* <div className="text-light text-bold">Requirements</div>
                                            <div className="text-bold text-italic">No specific requirements for this event</div> */}
                                        </Col>
                                        <Col xs={12} md={4} style={{borderLeft:"1px solid #323232",padding:"0"}}>
                                            <div className="event-register-div">
                                                <RaisedButton label="Register" labelStyle={{fontWeight:"bold"}} className="background-white event-register-button text-bold" />
                                            </div>
                                            <div className="event-right-details">
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Price</span>
                                                    <div className="item-right-detail text-bold">Rs. {event['Reg fees After GST']} / person</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Team Event</span>
                                                    <div className="item-right-detail text-bold">{event['Team Event (yes/no)']}</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Co-Ordinator 1</span>
                                                    <div className="item-right-detail text-bold">{event['COORDINATOR 1']}</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Co-Ordinator 2</span>
                                                    <div className="item-right-detail text-bold">{event['COORDINATOR 2']}</div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Phone</span>
                                                    <div className="item-right-detail text-bold"><a href={`tel:${event['PHONE']}`}>{event['PHONE']}</a></div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">E-mail</span>
                                                    <div className="item-right-detail text-bold"><a href={`mailto:${event['EMAIL']}`}>{event['EMAIL']}</a></div>
                                                </div>
                                                <div className="event-right-detail-item">
                                                    <span className="text-light text-bold item-right-tag">Share Event</span>
                                                    <div className="item-right-detail text-bold">
                                                      <a style={{fontSize:'24px',padding:'10px'}} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}><FontAwesome name='facebook'/></a>
                                                      <a style={{fontSize:'24px',padding:'10px'}} href={`https://twitter.com/home?status=Check%20out%20${event['EVENT NAME']}%20in%20Riviera%20at%20${window.location.href}`}><FontAwesome name='twitter'/></a>

                                                      <a style={{fontSize:'24px',padding:'10px'}} href={`whatsapp://send?text=Check%20out%20${event['EVENT NAME']}%20in%20Riviera%20at%20${encodeURIComponent(window.location.href)}`} data-action="share/whatsapp/share"><FontAwesome name='whatsapp'/></a>
                                                    </div>
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
              ))}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(SingleEvent);
