import React from 'react'

class Slider extends React.Component{
  render(){
    return(
      <div>
        Premium and exciting events
        {/* This will map on a database */}
        <div className='cards-container'>
          <div className='card'>
            Combo<br/>
            Day 1 + Day 2
          </div>
        </div>
      </div>
    )
  }
}

export default Slider
