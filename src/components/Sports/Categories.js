import React from 'react'
import FontAwesome from 'react-fontawesome';
import badminton from './../../images/sports-cards/badminton.jpg';
import basketball from './../../images/sports-cards/basketball.jpg';
import chess from './../../images/sports-cards/chess.jpg';
import cricket from './../../images/sports-cards/cricket.jpg';
import football from './../../images/sports-cards/football.jpg';
import handball from './../../images/sports-cards/handball.jpg';
import hockey from './../../images/sports-cards/hockey.jpg';
import snooker from './../../images/sports-cards/snooker.jpg';
import swimming from './../../images/sports-cards/swimming.jpg';
import tennis from './../../images/sports-cards/tennis.jpg';
import throwball from './../../images/sports-cards/throwball.jpg';
import tt from './../../images/sports-cards/tt.jpg';
import volleyball from './../../images/sports-cards/volleyball.jpg';
import mrriviera from './../../images/sports-cards/mrriviera.jpg';
import general from './../../images/sports-cards/general.jpg';

const styles={
  featuredContainer:{
    display:'inline-flex',
    width:'100%',
    overflowX:'scroll',
    scrollbar:'hidden'
  },
  child:{ width: `300px`, height: `100%`,padding:'20px'},
  parent:{  height: `300px`}
}

class Categories extends React.Component {
    state={
        phenomenonOpacity:1
    }
    componentDidMount(){
      this.fetchSports('general',general)
    }
    managePhenomenon(e){
        const scrollPosition=document.getElementById('featured').scrollLeft
        const magnitude=100-scrollPosition

    }
    scrollLeft=()=>{
      document.getElementById('featured').scrollBy({
          left:600,
          top:0,
          behavior:'smooth'
      })
    }
    scrollRight=()=>{
      document.getElementById('featured').scrollBy({
          left:-600,
          top:0,
          behavior:'smooth'
      })
    }
    fetchSports = (sport,backgroundImage) =>{
      this.props.fetchSports(sport,backgroundImage);
    }
  render(){
        console.log('Opacity',this.state.phenomenonOpacity);
    return(
      <div className='featured-container event-categories sports-categories'
        onScroll={(e)=>{this.managePhenomenon(e)}}
        id="featured"
        style={{backgroundImage:`url(${this.props.backgroundImage})`,backgroundSize:'cover'}}
        >
        <div className="arrow event-category-arrow left" onClick={()=>{this.scrollRight()}}><FontAwesome name="chevron-left"/></div>
        <div className="item" onClick={()=>this.fetchSports('general',general)}>
          <div className="event-card">
            <img src={general} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            General Rules
            <br/>
            <span className="category-subtitle"></span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('swimming',swimming)}>
          <div className="event-card">
            <img src={swimming} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            Swimming
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('mrriviera',mrriviera)}>
          <div className="event-card">
            <img src={mrriviera} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            Mr. Riviera
            <br/>
            <span className="category-subtitle">(Men)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('badminton',badminton)}>
          <div className="event-card">
            <img src={badminton} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            Badminton
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('tennis',tennis)}>
          <div className="event-card">
            <img src={tennis} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            Tennis
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('tabletennis',tt)}>
          <div className="event-card">
            <img src={tt} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            Table Tennis
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('chess',chess)}>
          <div className="event-card">
            <img src={chess} className="event-card-img"/>
                  <div className='overlay-layer'></div>
          <div className="category-title">
            Chess
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('snooker',snooker)}>
            <div className="event-card">
              <img src={snooker} className="event-card-img"/>
                    <div className='overlay-layer'></div>
                <div className="category-title">
                    Snooker
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                </div>
            </div>
        </div>
          <div className="item" onClick={()=>this.fetchSports('throwball',throwball)}>
              <div className="event-card">
                <img src={throwball} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                    Throwball
                    <br/>
                    <span className="category-subtitle">(Women only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('basketball',basketball)}>
              <div className="event-card">
                <img src={basketball} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                    Basketball
                    <br/>
                    <span className="category-subtitle">(Men & Women)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('volleyball',volleyball)}>
              <div className="event-card">
                <img src={volleyball} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                    Volleyball
                    <br/>
                    <span className="category-subtitle">(Men & Women)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('handball',handball)}>
              <div className="event-card">
                <img src={handball} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                    Handball
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('hockey',hockey)}>
              <div className="event-card">
                <img src={hockey} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                    Hockey
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('cricket',cricket)}>
              <div className="event-card">
                <img src={cricket} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                      Cricket
                      <br/>
                      <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('football',football)}>
              <div className="event-card">
                <img src={football} className="event-card-img"/>
                      <div className='overlay-layer'></div>
                  <div className="category-title">
                      Football
                      <br/>
                      <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="arrow event-category-arrow right" onClick={()=>{this.scrollLeft()}}><FontAwesome name="chevron-right"/></div>
        <div>
        </div>
      </div>
    )
  }
}

export default Categories
