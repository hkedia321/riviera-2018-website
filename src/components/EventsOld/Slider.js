import React from 'react'

class Slider extends React.Component{
  render(){
    return(
      <div className={this.props.className}>
        <div className='title'>Premium and exciting events</div>
        {/* This will map on a database */}
        <div className='events-cards-container'>
          <div className='event-card'>
            <div className='event-type-container'>
              <div className='event-type yellow'>
                Premium
              </div>
            </div>
            <span className='combo'>Combo</span><br/><br/>
            <span className='combo-detail'>Day 1 + Day 2</span>
          </div>
          <div className='event-card'>
            <div className='event-type-container'>
              <div className='event-type blue'>
                Sports
              </div>
            </div>
            <span className='combo'>Combo</span><br/><br/>
            <span className='combo-detail'>Day 1 + Day 2</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider
