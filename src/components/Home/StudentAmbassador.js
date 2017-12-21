import React from 'react'
import Button from '../Button'
class StudentAmbassador extends React.Component {
  render(){
    return(
      <div className='student-ambassador'>
        <h1>Become a Student Ambassador</h1>
        <h4>The best program to get the word out there</h4>
        <div className='register-button-container' style={{position:'relative',top:'50px'}}>
          <Button text='Enroll Now' style={{position:'relative',left:'300px'}} color='#ED994E'/>
        </div>
      </div>
    )
  }
}

export default StudentAmbassador
