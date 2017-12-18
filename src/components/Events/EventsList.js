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

class EventsList extends React.Component {
  render(){

    const {events}=this.props
    return(
      <div className='events-list'>
        {(events.length>0 && !this.props.loading)?
          <div>
          {this.props.loading?
            <div>Loading...</div>
            :
            <div>
              <h1>{this.props.event_category}</h1>
            <Table
              selectable={false}
              style={{background:'#2D2D2D',width:'95%',margin:'20px'}}
              >
              <TableBody displayRowCheckbox={false}>
                <TableRow style={{color:'#fff'}}>
                  <TableRowColumn style={{fontWeight:'bold'}}>Event Name</TableRowColumn>
                  <TableRowColumn style={{fontWeight:'bold'}}>Club Name</TableRowColumn>
                  <TableRowColumn style={{fontWeight:'bold'}}>Description</TableRowColumn>
                </TableRow>
                {events.map((event)=>(
                  <TableRow key={event['EVENT NAME']} selectable={false} style={{color:'#fff'}}>
                    <TableRowColumn>{event['EVENT NAME']}</TableRowColumn>
                    <TableRowColumn>{event['CLUB NAME']}</TableRowColumn>
                    <TableRowColumn><button onClick={()=>{
                      console.log('Clicked')
                      this.props.selectEvent({
                        eventName:event['EVENT NAME'],
                        eventDescription:event['DESCRIPTION'],
                        eventOrganiser:event['CLUB NAME']
                      })}}>View Details</button></TableRowColumn>
                    <TableRowColumn>{event['DESCRIPTION']}</TableRowColumn>
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
