import React from 'react'
import './Button.css'

class Button extends React.Component {
  render(){
    return(
      <button href={this.props.href} className='chevron'>​{this.props.text}</button>
    )
  }
}

export default Button
