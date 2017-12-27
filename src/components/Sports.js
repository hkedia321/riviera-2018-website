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
      sport:"swimming"
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

                {/*
                {sport==="swimming" && <Swimming/>}
                {sport==="badminton" && <Badminton/>}
                {sport==="tennis" && <Tennis/>}
                {sport==="tabletennis" && <Tabletennis/>}
                {sport==="chess" && <Chess/>}
                {sport==="snooker" && <Snooker/>}
                {sport==="throwball" && <Throwball/>}
                {sport==="basketball" && <Basketball/>}
                {sport==="volleyball" && <Volleyball/>}
                {sport==="handball" && <Handball/>}
                {sport==="hockey" && <Hockey/>}
                {sport==="cricket" && <Cricket/>}
                {sport==="football" && <Football/>}
                */}

                <Footer/>
            </div>
        )
    }
}

export default Events
