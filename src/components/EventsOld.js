import React from 'react'

import './EventsOld.css'

import Navbar from './Navbar'
import Slider from './EventsOld/Slider'
import Listing from './EventsOld/Listing'

class Events extends React.Component{
  render(){
    return(
      <div className='events-page'>
        {/* Navbar */}
        <Navbar/>
        {/* Events Slider */}
        <Slider className='events-slider'/>

        {/* Events Listing */}
        <Listing className='events-listing'/>
      </div>
    )
  }
}

export default Events
