import React from 'react'
import Categories from './Sports/Categories'
import SportsList from './Sports/EventsList'
import './Events.css'

import axios from 'axios'

class Events extends React.Component{
    state={
      events:[],
      sports_categories:[],
      redirectToEvent:false
    }

    render(){
        return(
            <div className="events">
                {/* Top Portion with cards */}
                <Categories SportsCategories={this.state.sports_categories}/>

                {/* List of Events */}
                

            </div>
        )
    }
}

export default Events
