import React from 'react'
import FontAwesome from 'react-fontawesome';
import sports from './../../images/events-cards/humanbowling.jpg';
import cyber from './../../images/events-cards/cyber.jpg';
import informals from './../../images/events-cards/informal.jpg';
import drama from './../../images/events-cards/drama.jpg';
import dance from './../../images/events-cards/dance.jpg';
import music from './../../images/events-cards/music.jpg';
import pre from './../../images/events-cards/pre.jpg';
import premium from './../../images/events-cards/premium.jpg';
import quiz from './../../images/events-cards/quiz.jpeg';
import english from './../../images/events-cards/english.jpg';
import hindi from './../../images/events-cards/hindi.jpg';
import tamil from './../../images/events-cards/tamil.jpg';
import telugu from './../../images/events-cards/telugu.jpg';
import workshop from './../../images/events-cards/workshop.jpg';
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
  render(){
        console.log('Opacity',this.state.phenomenonOpacity)
    return(
      <div className='featured-container event-categories' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
          <div className="overlay"></div>
        <div className="arrow event-category-arrow left" onClick={()=>{this.scrollRight()}}><FontAwesome name="chevron-left"/></div>
        <div className="item" onClick={()=>this.props.fetchEvents('adventure%20sports')}>
        <div className="event-card">
            <img src={sports} className="event-card-img"/>
            <div className='overlay-layer'></div>
            <div className='category-title'>Adventure Sports</div>
      </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchEvents('cyber%20engage')}>
        <div className="event-card">
            <img src={cyber} className="event-card-img"/>
            <div className='overlay-layer'></div>
            <div className='category-title'>Cyber Engage</div>
      </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchEvents('dance')}>
        <div className="event-card">
            <img src={dance} className="event-card-img"/>
            <div className='overlay-layer'></div>
            <div className='category-title'>Dance</div>
      </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchEvents('drama')}>
          <div className="event-card">
              <img src={drama} className="event-card-img"/>
              <div className='overlay-layer'></div>
              <div className='category-title'>Drama</div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchEvents('informals')}>
          <div className="event-card">
              <img src={informals} className="event-card-img"/>
              <div className='overlay-layer'></div>
              <div className='category-title'>Informals</div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchEvents('music')}>
          <div className="event-card">
              <img src={music} className="event-card-img"/>
              <div className='overlay-layer'></div>
              <div className='category-title'>Music</div>
        </div>
        </div>
          <div className="item" onClick={()=>this.props.fetchEvents('pre-riviera')}>
            <div className="event-card">
                <img src={pre} className="event-card-img"/>
                <div className='overlay-layer'></div>
                <div className='category-title'>Pre-Riviera</div>
          </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('premium')}>
            <div className="event-card">
                <img src={premium} className="event-card-img"/>
                <div className='overlay-layer'></div>
                <div className='category-title'>Premium</div>
          </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('quiz%20events')}>
            <div className="event-card">
                <img src={quiz} className="event-card-img"/>
                <div className='overlay-layer'></div>
                <div className='category-title'>Quiz Events</div>
          </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('words%20with%20english')}>
              <div className="event-card">
                  <img src={english} className="event-card-img"/>
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Words with English</div>
            </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('words%20with%20hindi')}>
              <div className="event-card">
                <img src={hindi} className="event-card-img"/>
                <div className='overlay-layer'></div>
                  <div className="category-title">
                    Words with Hindi
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('words%20with%20telugu')}>
              <div className="event-card">
                <img src={telugu} className="event-card-img"/>
                <div className='overlay-layer'></div>
                  <div className="category-title">
                      Words with Telugu
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('words%20with%20tamil')}>
              <div className="event-card">
                <img src={tamil} className="event-card-img"/>
                <div className='overlay-layer'></div>
                  <div className="category-title">
                      Words with Tamil
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchEvents('workshops')}>
              <div className="event-card">
                <img src={workshop} className="event-card-img"/>
                <div className='overlay-layer'></div>
                  <div className="category-title">
                    Workshops
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
