import React from 'react'
import './Navbar.css'
class Navbar extends React.Component{
  render(){
    return(
        <nav style={{color:this.props.fontColor}}>
          <ul>
            <li>Events</li>
            <li>Schedule</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </nav>
    )
  }
}

export default Navbar
