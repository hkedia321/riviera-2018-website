import React from 'react'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';
import PropTypes from 'prop-types';
class Navbar extends React.Component{
  constructor(props) {
        super(props);

    }
  handleNav = (place) =>{
    this.context.router.history.push("/"+place);
  }
  render(){

    return(
        <nav style={{color:this.props.fontColor}}>
          <div className="main-nav-div">
            <span className="main-nav-item" onClick={()=>this.handleNav("events")}>Events</span>
            <span className="main-nav-item" onClick={()=>this.handleNav("schedule")}>Schedule</span>
            <span className="main-nav-item" onClick={()=>this.handleNav("proshows")}>Proshows</span>
            <span className="main-nav-item" onClick={()=>this.handleNav("faq")}>FAQ</span>
            <span className="main-nav-item" onClick={()=>this.handleNav("contact")}>Contact</span>
          </div>
        </nav>
    )
  }
}
function mapStateToProps(state){
    return {

    };
}

Navbar.contextTypes = {
  router: PropTypes.object
}
export default connect(mapStateToProps,actions)(Navbar);
