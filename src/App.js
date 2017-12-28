import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import SingleEvent from './components/SingleEvent';
import Proshows from './components/Proshows/Proshow.js';
import Home from './components/Home';
import './App.css';
import EventsOld from './components/EventsOld';
import Events from './components/Events'
import Contactus from './components/Contactus'
import Sports from './components/Sports';
import Sponsors from './components/Sponsors';
import Navbar from './components/Navbar/Navbar';
import CampusAmbassadorPage from './components/CampusAmbassadorPage'

class App extends Component {
  state={
    selectedEvent:{
      name:'',
      description:'',
      organiser:'',
      prize:'1000',
      requirements:'',
      teamSize:'Team of 3',
      date:'',
      timing:''
    }
  }
  closeSnackbar=()=>{
    this.props.hideMessage();
    console.log("hideMessage");
  }
  selectEvent=(event)=>{
    console.log('Selected',event)
    this.setState({
      selectedEvent:{
        name:event.eventName,
        description:event.eventDescription,
        organiser:event.eventOrganiser
      }
    },()=>{
      this.context.router.history.push('/event');
    })
  }
  render() {
    console.log(this.state)
    var snackbarOpen=false;
    var snackbarMessage="";
    if(typeof this.props.message.payload !=='undefined' && this.props.message.payload.show===true){
      snackbarOpen=this.props.message.payload.show
      snackbarMessage = this.props.message.payload.message;
    }
    return (
      <div className="app-wrap">
        <Route exact path='/event/:category/:event_name' render={()=>(
          <SingleEvent
            eventName={this.state.selectedEvent.name}
            eventDescription={this.state.selectedEvent.description}
            eventOrganiser={this.state.selectedEvent.organiser}
          />
        )}/>

        {/* Following line is Merchandise */}
        <Route exact path='/merchandise' component={EventsOld}/>

        <Route exact path='/events' render={()=>(<Events selectEvent={this.selectEvent}/>)}/>
        <Route exact path='/proshows' component={Proshows}/>
        <Route exact path='/sports' component={Sports}/>
        <Route exact path='/contact' component={Contactus}/>
        <Route exact path='/sponsors' component={Sponsors}/>

        <Route exact path='/campus-ambassador' component={CampusAmbassadorPage}/>
        <Route exact path='/' component={Home}/>

        <Snackbar
          open ={snackbarOpen}
          message={snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={()=>this.closeSnackbar()}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    message:state.message
  };
}

App.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps,actions)(App);
