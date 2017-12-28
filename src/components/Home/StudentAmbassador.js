import React from 'react'
import Button from '../Button'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
class StudentAmbassador extends React.Component {
    render(){
        return(
            <div className='student-ambassador'>
                <Fade delay={100}>
                    <h1>Become a Student Ambassador</h1>
                </Fade>
                <Fade delay={300}>
                    <h4>The best program to get the word out there</h4>
                </Fade>
                <div className='register-button-container' style={{position:'relative',top:'50px'}}>
                    <Link to='/campus-ambassador' style={{textDecoration:'none'}}>
                    <Button text='Enroll Now' style={{position:'relative',left:'300px'}} orange={true} color='#ED994E'/>
                </Link>
            </div>

        </div>
    )
}
}

export default StudentAmbassador
