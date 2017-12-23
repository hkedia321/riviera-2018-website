import React from 'react';
import Categories from './Sports/Categories';
import Swimming from './Sports/SportDetails/Swimming.js';
import Badminton from './Sports/SportDetails/Badminton.js';
import Tennis from './Sports/SportDetails/Tennis.js';
import Tabletennis from './Sports/SportDetails/Tabletennis.js';
import Chess from './Sports/SportDetails/Chess.js';
import Snooker from './Sports/SportDetails/Snooker.js';
import Throwball from './Sports/SportDetails/Throwball.js';
import Basketball from './Sports/SportDetails/Basketball.js';
import Volleyball from './Sports/SportDetails/Volleyball.js';
import Handball from './Sports/SportDetails/Handball.js';
import Hockey from './Sports/SportDetails/Hockey.js';
import Cricket from './Sports/SportDetails/Cricket.js';
import Football from './Sports/SportDetails/Football.js';

import axios from 'axios'

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
        return(
            <div className="events">
                {/* Top Portion with cards */}
                <Categories fetchSports={this.fetchSports}/>

                {/* List of Events */}
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


            </div>
        )
    }
}

export default Events
