/**
 * Created by rahul on 16/12/17.
 */
import React from 'react'
import Categories from './Events/Categories'
import EventsList from './Events/EventsList'
import './Events.css'

class Events extends React.Component{
    render(){
        return(
            <div className="events">
                {/* Top Portion with cards */}
                <Categories/>

                {/* List of Events */}
                <EventsList/>

            </div>
        )
    }
}

export default Events