import React from 'react';
import Categories from './Sports/Categories';
import SportCard from './Sports/SportCard.js';
import Navbar from './Navbar/Navbar'
import axios from 'axios'
import Footer from './Home/Footer';

class Events extends React.Component{
    state={
      events:[],
      sports_categories:[],
      redirectToEvent:false,
      sport:"general"
    }
    fetchSports = (sport)=>{
        this.setState({sport});
    }
    render(){
        const {sport} = this.state;
        let sportsDetails
        return(
            <div className="events">
                <Navbar fontColor='#fff'/>
                {/* Top Portion with cards */}
                <Categories fetchSports={this.fetchSports}/>

                {/* List of Events */}

                {<SportCard sport={sport}/>}

                <Footer/>
            </div>
        )
    }
}

export default Events
