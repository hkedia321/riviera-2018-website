import React from 'react'
import {
    Link
} from 'react-router-dom';
import FontAwesome from 'react-fontawesome'
import eventImg from './../../images/home-cards/events.jpg';
import sportsImg from './../../images/home-cards/sports.jpg';
import proshowsImg from './../../images/home-cards/proshows.jpg';
import previousImg from './../../images/home-cards/previous.jpg';
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

class Featured extends React.Component {
    state={
        phenomenonOpacity:1,
        phenomenonClass:'visible'
    }
    managePhenomenon(){
        const scrollPosition=document.getElementById('featured').scrollLeft
        const magnitude=scrollPosition-1000
        console.log('Featured Scroll:',scrollPosition)
        this.setState({
          phenomenonOpacity:1-scrollPosition/100
        })
        // if(magnitude<0 && this.state.phenomenonOpacity>0){
        //     this.setState({
        //         phenomenonOpacity:this.state.phenomenonOpacity-0.033
        //     })
        // }
        // else if(magnitude>0 && this.state.phenomenonOpacity<1){
        //     this.setState({
        //         phenomenonOpacity:this.state.phenomenonOpacity+0.033
        //     })
        // }
        //
        // if(scrollPosition>400){
        //     this.setState({
        //         phenomenonOpacity:0
        //     })
        // }
        // if(scrollPosition===0){
        //     this.setState({
        //         phenomenonOpacity:1
        //     })
        // }
    }
    componentDidMount(){
      window.addEventListener('scroll', this.manageVisibility)
    }
    manageVisibility=()=>{
      const html = document.documentElement;
      let scroll = html.scrollTop;
      if(scroll>350&&(document.getElementById('featured'))){
        this.scrollLeft(200)
      }
    }
    scrollLeft=()=>{
        document.getElementById('featured').scrollBy({
            left:600,
            top:0,
            behavior:'smooth'
        })
    }
    scrollLeft=(val)=>{
      document.getElementById('featured').scrollBy({
          left:val,
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
  render(){
        console.log('Opacity',this.state.phenomenonOpacity)
    return(
      <div className='featured-container' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
            <div className="arrow left" onClick={()=>{this.scrollRight()}}><FontAwesome name="chevron-left"/></div>
            <div className="item">
              <div className={'phenomenon '+this.state.phenomenonClass} style={{opacity:this.state.phenomenonOpacity}}>
                <h2>The phenomenon</h2>
                <p>Riviera'18 will be packed with performances from cultural clubs to leading artists. Sports and daily events will enhance the fun</p>
              </div>
            </div>
            <div className="item">
                <Link to="/events">
              <div className="event-card events-specific-card">
                  <img src={eventImg} className="event-card-img"/>
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Events</div>
              </div>
          </Link>
            </div>
            <div className="item">
              <Link to="/sports">
              <div className="event-card sports">
                  <img src={sportsImg} className="event-card-img"/>
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Sports</div>
            </div>
          </Link>
            </div>
            <div className="item">
              <Link to="/campus-ambassador">
                <div className="event-card proshows">
                    <img src={proshowsImg} className="event-card-img"/>
                    <div className='overlay-layer'></div>
                    <div className='category-title'>Campus Ambassador</div>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="/sponsors">
              <div className="event-card previous">
                  <img src={previousImg} className="event-card-img"/>
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Sponsors</div>
            </div>
          </Link>
            </div>
            <div className="arrow right" onClick={()=>{this.scrollLeft()}}><FontAwesome name="chevron-right"/></div>
      </div>
    )
  }
}

export default Featured
