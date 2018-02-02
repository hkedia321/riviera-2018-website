import React from 'react';
import Categories from './Sports/Categories';
import SportCard from './Sports/SportCard.js';
import Navbar from './Navbar/Navbar'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import Footer from './Home/Footer';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/action/help'

class Events extends React.Component{
    state={
      events:[],
      sports_categories:[],
      redirectToEvent:false,
      sport:"general",
      backgroundImage:''
    }
    fetchSports = (sport,backgroundImage)=>{
        console.log(backgroundImage)
        this.setState({
          sport,
          backgroundImage
        });
    }
    render(){
        const style={
            position:'fixed',
            bottom:'10px',
            right:'20px',
            zIndex:10
          }
        const {sport} = this.state;
        let sportsDetails
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
                  <title>Sports - VIT Riviera | 15th-18th February, 2018 | Vellore Institute of Technology</title>
                </Helmet>
                <Navbar fontColor='#fff'/>
                {/* Top Portion with cards */}
                <Categories
                  fetchSports={this.fetchSports}
                  backgroundImage={this.state.backgroundImage}
                />

                {/* List of Events */}

                {<SportCard sport={sport}/>}

                <Footer/>
            </div>
        )
    }
}

export default Events
