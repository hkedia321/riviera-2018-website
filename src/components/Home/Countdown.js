import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import CountdownNow from 'react-count-down'

import './Countdown.css'

class Countdown extends React.Component {
  state={
    daysLeft:0,
    hoursLeft:0,
    minutesLeft:0,
    secondsLeft:0
  }
  componentDidMount(){
    const finalDate=1518566400
    setTimeout(()=>{
      const currentDate=Math.round((new Date()).getTime() / 1000)
      const daysLeft=Math.round((finalDate-currentDate)/86400)
      const hoursLeft=Math.round(((finalDate-currentDate)%86400)/3600)
      const minutesLeft=Math.round((((finalDate-currentDate)%86400)%3600)/60)
      const secondsLeft = (((finalDate-currentDate) % 86400) % 3600) % 60
      this.setState({
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
      })
    },1000)
  }
  cb=()=>{

  }
  render(){
    const OPTIONS = { endDate: '02/14/2018 09:00 AM', prefix: 'until the phenomenon!'}
    return(
      <div className='countdown'>
        <Row>
          <Col xs={12}>
            <CountdownNow options={OPTIONS}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Countdown
