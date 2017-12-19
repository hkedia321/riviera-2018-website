import React from 'react'
import './Navbar.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import PropTypes from 'prop-types';
import 'jquery';
import './hamburger.css';
class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      navbarBgTransparent:"0"
    }
  }
  handleNav = (place) =>{
    this.context.router.history.push("/"+place);
  }
  managePhenomenon =(e)=>{
    const html = document.documentElement;
    let scroll = html.scrollTop;
    console.log("Scroll:"+scroll);
    let pc=scroll/500;
    let bg=pc>1?1:pc;
    this.setState({
      navbarBgTransparent:bg
    })
  }
  componentDidMount(){
    window.addEventListener('scroll', this.managePhenomenon);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.managePhenomenon);
}
  render(){
    const bg=`rgba(36,36,36,${this.state.navbarBgTransparent})`;
    return(
        <div>
      <nav className="hide-on-mobile-only" style={{color:this.props.fontColor,backgroundColor:bg}} onScroll={(e)=>{this.managePhenomenon(e)}}>
        <div className="main-nav-div">
          <NavLink to="/events"><span className="main-nav-item">Events</span></NavLink>
          <NavLink to="/schedule"><span className="main-nav-item">Schedule</span></NavLink>
          <NavLink to="/proshows"><span className="main-nav-item" >Proshows</span></NavLink>
          <NavLink to="/faq"><span className="main-nav-item">FAQ</span></NavLink>
          <NavLink to="/contact"><span className="main-nav-item">Contact</span></NavLink>
        </div>
      </nav>
      <div className="display-on-mobile-only">
          <div className="header-bar">
              <button class="hamburger hamburger--slider" type="button"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>
          </div>
      </div>
  </div>
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