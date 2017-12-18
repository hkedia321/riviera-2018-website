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
      events:[],
      loading:false,
      event_category:'',
      redirectToEvent:false
    }
    componentDidMount(){
      this.fetchEvents('adventure%20sports')
    }
    fetchEvents=(category)=>{
      this.setState({
        loading:true
      })
      axios({
        method:'get',
        url:`https://riviera18.herokuapp.com/?event_category=${category}`
      }).then((response)=>{
        console.log(response)
        console.log(response.data.event_list)
        this.setState({
          event_category:response.data.event_category,
          events:response.data.event_list,
          loading:false
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
                <EventsList
                  event_category={this.state.event_category}
                  events={this.state.events}
                  loading={this.state.loading}
                  selectEvent={this.props.selectEvent}
                />

            </div>
        )
    }
}

export default Events
