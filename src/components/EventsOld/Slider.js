import React from 'react'

class Slider extends React.Component{
  render(){
    return(
      <div className={this.props.className}>
        <div className='title'>Premium and exciting events</div>
        {/* This will map on a database */}
        <div className='merchandise-cards-container'>
          <div className='merchandise-card'>
            <div className='merchandise-type-container'>
              <div className='merchandise-type yellow'>
                Premium
              </div>
            </div>
            <span className='combo'>Combo</span><br/><br/>
            <span className='combo-detail'>Day 1 + Day 2</span>
          </div>
          <div className='merchandise-card'>
            <div className='merchandise-type-container'>
              <div className='merchandise-type blue'>
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
