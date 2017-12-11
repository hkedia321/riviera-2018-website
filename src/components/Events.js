import React from 'react'

import './Events.css'

import Navbar from './Navbar'
import Slider from './Events/Slider'

class Events extends React.Component{
  render(){
    return(
      <div className='events-page'>
        {/* Navbar */}
        <Navbar/>
        {/* Events Slider */}
        <Slider className='events-slider'/>
        
        {/* Events Listing */}
      </div>
    )
  }
}

export default Events
