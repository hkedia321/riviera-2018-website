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
import classNames from 'classnames';

import 'jquery';
import './hamburger.css';
class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      navbarBgTransparent:"0",
      navbarOpen:false,
        active:{
          home:false,
          events:false,
          sports:false,
          campus:false,
          sponsors:false,
          contact:false
        }
    }
  }
  handleNav = (place) =>{
    this.context.router.history.push("/"+place);
  }
  managePhenomenon =(e)=>{
    const html = document.documentElement;
    let scroll = html.scrollTop;
    let pc=scroll/500;
    let bg=pc>1?1:pc;
    this.setState({
      navbarBgTransparent:bg
    })
  }
  componentDidMount(){
    window.addEventListener('scroll', this.managePhenomenon);
    const path=window.location.pathname
    console.log(path)
    Object.keys(this.state.active).forEach((key)=>{
      this.setState({
          active:{
            ...this.state.active,
            [key]:false
          }
      })
    })

      switch (path){
          case '/':{
            this.setState({
                active:{home:true}
            })
          }
          case '/events':{
              this.setState({
                  active:{events:true}
              })
          }
          case '/sports':{
              this.setState({
                  active:{sports:true}
              })
          }
          case '/campus-ambassador':{
              this.setState({
                  active:{campus:true}
              })
          }
          case '/sponsors':{
              this.setState({
                  active:{sponsors:true}
              })
          }
          case '/contact':{
              this.setState({
                  active:{contact:true}
              })
          }
      }
    }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.managePhenomenon);
}
handleClick = () =>{
    if(this.state.navbarOpen){
        this.setState({
          navbarOpen:false
        })
        document.body.style.overflowY='auto';
    }
    else{
        this.setState({
          navbarOpen:true
        })
        // document.body.style.overflowY='hidden';
    }

}
  render(){
    const bg=`rgba(36,36,36,${this.state.navbarBgTransparent})`;
    const hamburgerButton=classNames({
      "hamburger":true,
      "hamburger--slider":true,
      "is-active":this.state.navbarOpen
    })
    const mobileSidebar=classNames({
      "mobile-nav-sidebar":true,
      "sidebar-is-active":this.state.navbarOpen
    })
    return(
        <div>
      <nav className="hide-on-mobile-only" style={{color:this.props.fontColor,backgroundColor:bg}} onScroll={(e)=>{this.managePhenomenon(e)}}>
        <div className='logo'>
            <Link to="/">
          <img src='/vitlogo.png'/>
            </Link>
        </div>
        <div className="main-nav-div">
            <NavLink to="/events"><span className="main-nav-item">Events</span></NavLink>
            <NavLink to="/sports"><span className="main-nav-item">Sports</span></NavLink>
            {/* <NavLink to="/schedule"><span className="main-nav-item">Schedule</span></NavLink> */}
            {/* <NavLink to="/proshows"><span className="main-nav-item" >Proshows</span></NavLink> */}
            <NavLink to="/campus-ambassador"><span className="main-nav-item">Campus Ambassador</span></NavLink>
            <NavLink to="/sponsors"><span className="main-nav-item">Sponsors</span></NavLink>
            {/* <NavLink to="/team"><span className="main-nav-item">Team</span></NavLink> */}
            <NavLink to="/contact"><span className="main-nav-item">Contact</span></NavLink>
        </div>
      </nav>
      <div className="display-on-mobile-only">
          <div className="mobile-nav-header-bar">
            <NavLink to="/">  <img src='/vitlogo.png' className="navbar-logo"/></NavLink>
              <button className={hamburgerButton} type="button" onClick={this.handleClick}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
          </div>


          <div className={mobileSidebar}>
              <NavLink to="/">  <img src='/rivieralogo.png' className="navbar-logo hide-on-mobile-only" alt=""/></NavLink>
              <NavLink to="/"><span className={`main-nav-item ${this.state.active.home?'active':''}`}>Home</span></NavLink>
              <NavLink to="/events"><span className={`main-nav-item ${this.state.active.events?'active':''}`}>Events</span></NavLink>
              <NavLink to="/sports"><span className={`main-nav-item ${this.state.active.sports?'active':''}`}>Sports</span></NavLink>
              {/* <NavLink to="/schedule"><span className={main-nav-item` ${}this.state.active.event?'active}:'Schedule</span></NavLink> */}
              {/* <NavLink to="/proshows"><span className={main-nav-item` ${}this.state.active.event?'active}:'>Proshows</span></NavLink> */}
              <NavLink to="/campus-ambassador"><span className={`main-nav-item ${this.state.active.campus?'active':''}`}>Campus Ambassador</span></NavLink>
              <NavLink to="/sponsors"><span className={`main-nav-item ${this.state.active.sponsors?'active':''}`}>Sponsors</span></NavLink>
              {/* <NavLink to="/team"><span className={`main-nav-item${this.state.active.team?'active':''}`}>Team</span></NavLink> */}
              <NavLink to="/contact"><span className={`main-nav-item ${this.state.active.contact?'active':''}`}>Contact</span></NavLink>
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
