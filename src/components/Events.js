/**
 * Created by rahul on 16/12/17.
 */
import React from 'react'
import Categories from './Events/Categories'
import EventsList from './Events/EventsList'
import './Events.css'

import axios from 'axios'

class Events extends React.Component{
    state={
      events:[
        {
          'CATEGORY NAME':'',
          'CLUB NAME':'',
          'COORDINATOR 1':'',
          'COORDINATOR 2':'',
          'DESCRIPTION':'',
          'EMAIL':'',
          'EVENT NAME':'',
          'PHONE':'',
          'Prize Money':'',
          'REG NO 1':'',
          'REG NO 2':'',
          'Reg fees After GST':'',
          'Team Event (yes/no)':''
        }
      ]
    }
    fetchEvents=(category)=>{
      console.log('Called')
      axios({
        method:'get',
        url:'https://riviera18.herokuapp.com/?event_category=adventure%20sports'
      }).then((response)=>{
        console.log(response.data.event_list)
        this.setState({
          events:response.data.event_list
        })
      }).catch((error)=>{
        console.error(error)
      })
    } 
    render(){
        return(
            <div className="events">
                {/* Top Portion with cards */}
                <Categories fetchEvents={this.fetchEvents}/>

                {/* List of Events */}
                <EventsList events={this.state.events}/>

            </div>
        )
    }
}

export default Events
