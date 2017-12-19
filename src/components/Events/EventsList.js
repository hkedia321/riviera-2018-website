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
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import FontAwesome from 'react-fontawesome'

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
      <div className='events-list'>
        {(events.length>0 && !this.props.loading)?
          <div>
          {this.props.loading?
            <div>Loading...</div>
            :
            <div>
              <h1>{this.props.event_category}</h1>
              <div className='search-container' style={{display:'flex',justifyContent:'flex-end',width:'90%',marginRight:'200px'}}>
                <input
                  type='text'
                  value={query}
                  onChange={(e)=>this.updateQuery(e.target.value)}
                  style={{
                    background:'#242424',
                    border:'0px',
                    padding:'10px',
                    color:'#fff'
                  }}
                  placeholder='Search'
                />
                <FontAwesome name='search' style={{padding:'10px'}}/>
              </div>
            <Table
              selectable={false}
              style={{background:'#2D2D2D',width:'95%',margin:'20px'}}
              >
              <TableBody displayRowCheckbox={false}>
                <TableRow style={{color:'#fff'}}>
                  <TableRowColumn style={{fontWeight:'bold'}}>Event Name</TableRowColumn>
                  <TableRowColumn style={{fontWeight:'bold'}}>Club Name</TableRowColumn>
                  <TableRowColumn style={{fontWeight:'bold'}}>Description</TableRowColumn>
                  <TableRowColumn style={{fontWeight:'bold'}}>More Details</TableRowColumn>
                </TableRow>
                {showingEvents.map((event)=>(
                  <TableRow key={event['EVENT NAME']} selectable={false} style={{color:'#fff'}}>
                    <TableRowColumn>{event['EVENT NAME']}</TableRowColumn>
                    <TableRowColumn>{event['CLUB NAME']}</TableRowColumn>
                    <TableRowColumn>{event['DESCRIPTION']}</TableRowColumn>
                    <TableRowColumn>
                      <Link
                        style={{
                          border:'0px',
                          padding:'10px'
                        }}
                        to={`/event/${this.props.event_category}/${event['EVENT NAME']}`}
                        >View Details</Link></TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          }
          </div>
          :
          <div>
            {this.props.loading?
              <div>Loading...</div>
              :
              <div>{this.props.event_category?<span>No Events found</span>:<span>Select a Category from above</span>}</div>
            }
          </div>
        }
      </div>
    )
  }
}

export default EventsList
