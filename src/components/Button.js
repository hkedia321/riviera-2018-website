import React from 'react'
import './Button.css'

class Button extends React.Component {
  render(){
    return(
        <div className='rajat-button' style={{background:this.props.color}}>
          <span>{this.props.text}</span>
        </div>
    )
  }
}

{/*<div className='button-container'>
  <button
    href={this.props.href}
    className='rajat-button'>
    ​ <span style={{color:'#fff'}}>{this.props.text}</span>
  </button>

</div>*/}

export default Button
