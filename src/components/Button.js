import React from 'react'
import './Button.css'

class Button extends React.Component {
  render(){
    return(
      <button href={this.props.href} className=''>​<span style={{color:'#fff'}}>{this.props.text}</span></button>
    )
  }
}

export default Button
