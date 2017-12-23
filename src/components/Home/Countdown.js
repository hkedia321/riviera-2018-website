import React from 'react'
import {Row,Col} from 'react-flexbox-grid'
import CountdownNow from 'react-count-down'
import './Countdown.css'

class AnimatedCard extends React.Component {
	render() {
		const { position, digit, animation } = this.props;
		return(
			<div className={`flipCard ${position} ${animation}`}>
				<span>{digit}</span>
			</div>
		);
	}
}

class StaticCard extends React.Component {
	render() {
		const { position, digit } = this.props;
		return(
			<div className={position}>
				<span>{digit}</span>
			</div>
		);
	}
}

class FlipUnitContainer extends React.Component {

	render() {
		const { digit, shuffle, unit } = this.props;

		let now = digit;
		let before = digit + 1;

		// to prevent a negative value
		if( unit !== 'hours') {
			before = before === -1 ? 59 : before;
		} else {
			before = before === -1 ? 23 : before;
		}

		// add zero
		if( now < 10 ) now = `0${now}`;
		if( before < 10 ) before = `0${before}`;

		// shuffle digits
		const digit1 = shuffle ? before : now;
		const digit2 = !shuffle ? before : now;

		// shuffle animations
		const animation1 = shuffle ? 'fold' : 'unfold';
		const animation2 = !shuffle ? 'fold' : 'unfold';

		return(
			<div className={'flipUnitContainer'}>
				<StaticCard
					position={'upperCard'}
					digit={now}
					/>
				<StaticCard
					position={'lowerCard'}
					digit={before}
					/>
				<AnimatedCard
					position={'first'}
					digit={digit1}
					animation={animation1}
					/>
				<AnimatedCard
					position={'second'}
					digit={digit2}
					animation={animation2}
					/>
			</div>
		);
	}
}

class FlipClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      days:0,
      daysShuffle:true,
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			50
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	updateTime() {
		// get new date
		const time = new Date;
		// set time units
		// const hours = time.getHours();
		// const minutes = time.getMinutes();
		// const seconds = time.getSeconds();

    // We need to calculate the days left for Riviera.
    const daysLeft=0
    const month=(time.getMonth()+1)
    console.log(month)

    // Update event date here
    const eventDate=4
    let totalDaysLeft=0
    if(month===12){
      // Logic for December
      const daysLeftInMonth=31-time.getDate()
      totalDaysLeft=daysLeftInMonth+31+eventDate
    }
    else if(month===1){
      // Logic for January
      const daysLeftInMonth=31-time.getDate()
      totalDaysLeft=daysLeftInMonth+eventDate
    }
    else if(month===2){
      // Logic for February
      totalDaysLeft=eventDate-time.getDate()
    }
    const days=totalDaysLeft
    const hours=24-time.getHours()
    const minutes=60-time.getMinutes()
    const seconds=60-time.getSeconds()

    if(days!==this.state.days){
      const daysShuffle=!this.state.daysShuffle
      this.setState({
        days,
        daysShuffle
      })
    }
		// on hour chanage, update hours and shuffle state
		if( hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours,
				hoursShuffle
			});
		}
		// on minute chanage, update minutes and shuffle state
		if( minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({
				minutes,
				minutesShuffle
			});
		}
		// on second chanage, update seconds and shuffle state
		if( seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({
				seconds,
				secondsShuffle
			});
		}
	}
	render() {
		const { days,daysShuffle,hours, minutes, seconds, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;
		return(
			<div className={'flipClock'}>
        <FlipUnitContainer
          unit={'days'}
          digit={days}
          shuffle={daysShuffle}
        />
				<FlipUnitContainer
					unit={'hours'}
					digit={hours}
					shuffle={hoursShuffle}
					/>
				<FlipUnitContainer
					unit={'minutes'}
					digit={minutes}
					shuffle={minutesShuffle}
					/>
				<FlipUnitContainer
					unit={'seconds'}
					digit={seconds}
					shuffle={secondsShuffle}
					/>
			</div>
		);
	}
}

class Countdown extends React.Component {
  render(){
    return(
      <div className='countdown'>
        <Row>
          <Col xs={12}>
            <FlipClock/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Countdown
