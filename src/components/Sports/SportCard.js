import React from 'react'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import {
    Card,
    CardText,
    CardTitle,
    CardHeader,
    CardActions
} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import FontAwesome from 'react-fontawesome'
import {Row,Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';

class SportCard extends React.Component {
    state={

    }

    render(){
        const sport = this.props.sport;
        let title,subtitle,content;
        if(sport==="general"){
            title="General Rules";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <ol>
                  <li>All players should compulsorily bring their college ID cards and bonafide, without which the participant will not be permitted.</li>
                  <li>All teams should report to the registration desk at least 3 hours prior to the match schedule.</li>
                  <li>Players must come in proper attire during the tournament and must report promptly to the court.</li>
                  <li>The sports committee reserves all the rights to change the time and venue of the matches.</li>
                  <li>The Officials’ decision shall be the final.</li>
                  <li>If there are less than 4 teams, then the event will be cancelled.</li>
                  <li>The rules will be followed according to the concerned Federations.</li>
                </ol>
            </div>;
        }
        else if(sport==="swimming"){
            title="Swimming";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>There are 8 categories in swimming</b>
                <ul>
                    <li> Freestyle- 50 m &amp; 100 m</li>
                    <li> Backstroke – 50 m &amp; 100m</li>
                    <li> Breaststroke – 50 m &amp; 100 m</li>
                    <li> Butterfly – 50m &amp; 100 m</li>
                </ul>
                <b>Rules and Regulations:</b>
                <ul>
                    <li> From one college, only 2 participants can participate in one event.</li>
                    <li> One Participant can participate in maximum 3 events.</li>
                    <li> It is an individual event only.</li>
                    <li> Registration Fee is &nbsp;<FontAwesome name='rupee' style={{color:'#fff'}}/> 250.</li>
                </ul>
            </div>;
        }
        else if(sport==='mrriviera'){
          title="Mr. Riviera";
          subtitle="Men";
          content=<div className="sport-card-content">
              <b>Rules and Regulations:</b>
              <ul>
                <li> There are 4 categories in Mr. Riviera
                  <ol>
                    <li>Below 60</li>
                    <li>60-70</li>
                    <li>70-80</li>
                    <li>Above 80</li>
                  </ol>
                </li>
                <li>The registration fee is <FontAwesome name='rupee' style={{color:'#fff'}}/> 250/- (inclusive of GST)</li>
                <li>It is an individual event.</li>
          </ul>
          </div>;
        }
        else if(sport==="badminton"){
            title="Badminton";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 2 and maximum 5 participants from women’s team and
                minimum 3 and maximum 5 participants from men’s team.</li>
                <li>
<<<<<<< HEAD
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>1250/- (inclusive of GST).
=======
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/> 1250/- (inclusive of all taxes plus GST).
>>>>>>> 58a0dbdec00cfafd75912ca7100c436de335da59
              </li>
            </ul>
            </div>;
        }
        else if(sport==="tennis"){
            title="Tennis";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 2 and maximum 5 participants from women’s team and
                minimum 3 and maximum 5 participants from men’s team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>1250/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="tabletennis"){
            title="Table Tennis";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 2 and maximum 5 participants from women’s team and
                minimum 3 and maximum 5 participants from men’s team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>1250/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="chess"){
            title="Chess";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 4 and maximum 6 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>1250/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="snooker"){
            title="Snooker";
            subtitle="Men Only";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 2 and maximum 5 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>1250/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="throwball"){
            title="Throwball";
            subtitle="Women Only";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 9 and maximum 12 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>3000/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="basketball"){
            title="Basketball";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 5 and maximum 12 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>3000/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="volleyball"){
            title="Volleyball";
            subtitle="Men & Women";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 6 and maximum 12 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>3000/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="handball"){
            title="Handball";
            subtitle="Men Only";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 7 and maximum 12 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>3000/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="hockey"){
            title="Hockey";
            subtitle="Men Only";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 11 and maximum 16 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>4000/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="cricket"){
            title="Cricket";
            subtitle="Men Only";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 11 and maximum 16 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>4000/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        else if(sport==="football"){
            title="Football";
            subtitle="Men Only";
            content=<div className="sport-card-content">
                <b>Rules and Regulations:</b>
                <ul>
                  <li> From one college, Minimum 11 and maximum 18 participants from each team.</li>
                <li>
                Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>4500/- (inclusive of GST).
              </li>
            </ul>
            </div>;
        }
        return(
            <div className='events-list'>

                <div>
                    <Row style={{width:'100%'}} top='md'>
                        <Col md={8} mdOffset={2} xs={12}>
                            <Fade delay={100}>
                            <Card style={{margin:'20px',marginBottom:"0",background:'#232323',color:'#fff'}}>
                                <CardTitle
                                    title={title}
                                    subtitle={subtitle}
                                    style={{textAlign:'center',color:'#fff',fontWeight:'bold',paddingBottom:"5px"}}
                                    titleColor='#fff'
                                    subtitleColor='#9E9E9E'
                                />
                                <CardText
                                  color='#fff'
                                  style={{textAlign:'left',paddingTop:"0",lineHeight: "1.2rem"}}
                                  >
                                      <hr className="zigzag mini"/>
                                    {content}
                                  </CardText>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                                </Fade>
                            </Col>
                        </Row>
                    </div>

                </div>
            )
        }
    }

    export default SportCard
