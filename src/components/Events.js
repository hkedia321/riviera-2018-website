/**
 * Created by rahul on 16/12/17.
 */
import React from 'react'
import Categories from './Events/Categories'
import EventsList from './Events/EventsList'
import './Events.css'
import Navbar from './Navbar/Navbar';
import { connect } from 'react-redux';
import * as actions from './../actions';
import {Helmet} from 'react-helmet'
import Footer from './Home/Footer';


import axios from 'axios'

class Events extends React.Component{
    state={
      events:[],
      loading:false,
      event_category:'',
      redirectToEvent:false,
      backgroundImage:'../../images/events-bg.jpg'
    }
    componentDidMount(){
      
    }
    fetchEvents=(category,image)=>{
      console.log(image)
      this.setState({
        loading:true,
        backgroundImage:image
      })
      axios({
        method:'get',
        url:`https://riviera18.herokuapp.com/?event_category=${category}`
      }).then((response)=>{
        console.log(response)
        console.log(response.data.event_list)
        this.setState({
          event_category:response.data.event_category,
          events:response.data.event_list,
          loading:false
        })
      }).catch((error)=>{
        console.error(error);
        this.setState({
          event_category:[],
          events:[],
          loading:false
        })
        this.props.showMessage("Error! Couldn't fetch Events");
      })
    }

    render(){
        return(
            <div className="events">
                <Helmet>
                  <title>Events - VIT Riviera | 15th-18th February, 2018 | Vellore Institute of Technology</title>
                </Helmet>
                <Navbar fontColor='#fff'/>
                {/* Top Portion with cards */}
                <Categories
                  fetchEvents={this.fetchEvents}
                  backgroundImage={this.state.backgroundImage}
                />

                {/* List of Events */}
                <EventsList
                  event_category={this.state.event_category}
                  events={this.state.events}
                  loading={this.state.loading}
                  selectEvent={this.props.selectEvent}
                />
                <Footer/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(Events);
