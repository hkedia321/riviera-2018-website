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
    console.log(this.props.events[0]['REG NO 2'])
    const {events}=this.props
    return(
      <div className='events-list'>
        <Table
          selectable={false}
          >
          <TableHeader>
            <TableRow>
              <TableRowColumn>Event Name</TableRowColumn>
              <TableRowColumn>Club Name</TableRowColumn>
              <TableRowColumn>Description</TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event)=>(
              <TableRow key={event['EVENT NAME']}>
                <TableRowColumn>{event['EVENT NAME']}</TableRowColumn>
                <TableRowColumn>{event['CLUB NAME']}</TableRowColumn>
                <TableRowColumn>{event['DESCRIPTION']}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default EventsList
