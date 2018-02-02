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
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/action/help'
import PDF from 'react-pdf-js'


import axios from 'axios'

class Events extends React.Component{
    state={
      events:[],
      loading:false,
      event_category:'',
      redirectToEvent:false,
      backgroundImage:'../../images/events-bg.jpg'
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
        const style={
          position:'fixed',
          bottom:'10px',
          right:'20px',
          zIndex:10
        }
        let pagination = null;
        if (this.state.pages) {
          pagination = this.renderPagination(this.state.page, this.state.pages);
        }

        return(
            <div className="events">
                <a href="https://drive.google.com/file/d/0B_vwzr8jXSpyTHIzTGdNWEVhczBvdkRleVFZOTFJbzB3Mmhz/view?usp=sharing" target='_blank'>
                  <FloatingActionButton
                    style={style}
                    onClick={()=>{

                    }}
                    >
                    <ContentAdd />
                  </FloatingActionButton>
                </a>
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
