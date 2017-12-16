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
import 'jquery';
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
    let pc=scroll/600;
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
      <nav style={{color:this.props.fontColor,backgroundColor:bg}} onScroll={(e)=>{this.managePhenomenon(e)}}>
        <div className="main-nav-div">
          <Link to="/events"><span className="main-nav-item">Events</span></Link>
          <Link to="/schedule"><span className="main-nav-item">Schedule</span></Link>
          <Link to="/proshows"><span className="main-nav-item" >Proshows</span></Link>
          <Link to="/faq"><span className="main-nav-item">FAQ</span></Link>
          <Link to="/contact"><span className="main-nav-item">Contact</span></Link>
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
