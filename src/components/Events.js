import React from 'react'

import './Events.css'

import Navbar from './Navbar'
import Slider from './Events/Slider'
import Listing from './Events/Listing'

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
