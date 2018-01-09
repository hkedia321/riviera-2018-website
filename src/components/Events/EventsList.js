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
import classNames from 'classnames';
import escapeRegExp from 'escape-string-regexp';
import Loading from './../Loading';
import sortBy from 'sort-by'
import FontAwesome from 'react-fontawesome'
import Fade from 'react-reveal/Fade';
import {Row,Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import NoEventsFound from './NoEventsFound';
class EventsList extends React.Component {
  state={
    query:''
  }
  updateQuery=(query)=>{
    this.setState({
      query:query.trim()
    })
  }
  render(){
    const {events}=this.props
    const {query}=this.state
    let showingEvents
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingEvents = events.filter((event) => match.test(event['EVENT NAME']))
    } else {
      showingEvents = events
    }
    return(
      <div className='events-list' style={this.props.loading?{minHeight:"90vh"}:null}>
        {(events.length>0 && !this.props.loading)?
          <div>
          {this.props.loading?
            <div><Loading/></div>
            :
            <div>
              <h1>{this.props.event_category}</h1>
              <div className='search-container' style={{display:'flex',justifyContent:'center',width:'100%'}}>
                <input
                  type='text'
                  value={query}
                  onChange={(e)=>this.updateQuery(e.target.value)}
                  style={{

                  }}
                  className="events-search-box"
                  placeholder='Search'
                />
                <FontAwesome name='search' style={{padding:'10px'}}/>
              </div>
              <Row style={{width:'100%',display:"flex",justifyContent:"space-evenly",alignItems:"center"}} top='md'>
                {showingEvents.map((event,index)=>{
                  let hvrClass=classNames({
                      "hvr-underline-reveal":true,
                      "reveal-blue":index%4===0,
                      "reveal-lblue":index%4===1,
                      "reveal-red":index%4===2,
                      "reveal-green":index%4===3,
                    });
                    return(
                  <Col md={4} xs={12}>
                      <Fade delay={100}>
                    <Link to={`/events/${this.props.event_category}/${event['EVENT NAME']}`}><Card className={hvrClass} style={{margin:'20px',background:'#232323',color:'#fff'}}>
                      <CardTitle
                        title={event['EVENT NAME']}
                        subtitle={event['CLUB NAME']}
                        style={{textAlign:'left',color:'#fff',fontWeight:'bold',paddingBottom:"5px"}}
                        titleColor='#fff'
                        subtitleColor='#9E9E9E'
                      />
                      <CardText
                        color='#fff'
                        style={{textAlign:'left',paddingTop:"0",lineHeight: "1.2rem"}}
                      >
                        <hr className="zigzag zigzag-left"/>
                        {event['DESCRIPTION']}
                      </CardText>
                      <CardActions>

                        <FlatButton disabled
                          icon={<FontAwesome name='rupee' style={{color:'#fff'}}/>}
                          label={`${event['Reg fees After GST']}/ ${event['Team Event (yes/no)']=='yes'?'team':'person'}`}
                          labelStyle={{color:'#fff'}}
                        />
                        <FlatButton disabled
                          label={`Prize: ${event['Prize Money']}`}
                          icon={<FontAwesome name='rupee' style={{color:'#fff'}}/>}
                          labelStyle={{color:'#fff'}}
                        />
                        {/* <Link to={`/event/${this.props.event_category}/${event['EVENT NAME']}`}><FlatButton label='View and Share' className="event-card-view-button" labelStyle={{color:'#fff'}} fullWidth={true}/></Link> */}
                      </CardActions>
                    </Card></Link>
                </Fade>
                  </Col>
                )
              }
            )}
              </Row>
        </div>
      }
    </div>
    :
    <div>
      {this.props.loading?
        <div><Loading/></div>
        :
        <div>{this.props.event_category?<div><h1>{this.props.event_category}</h1><NoEventsFound/></div>:<span>Select a Category from above</span>}</div>
      }
    </div>
  }
</div>
)
}
}

export default EventsList
