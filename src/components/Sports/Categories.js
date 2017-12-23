import React from 'react'
import FontAwesome from 'react-fontawesome'

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
        console.log('Opacity',this.state.phenomenonOpacity);
    return(
      <div className='featured-container event-categories' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
        <div className="arrow event-category-arrow left" onClick={()=>{this.scrollRight()}}><FontAwesome name="chevron-left"/></div>
        <div className="item" onClick={()=>this.props.fetchEvents('adventure%20sports')}>
          <div className="event-card">
          <div className="category-title">
            Swimming
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchSports('badminton')}>
          <div className="event-card">
          <div className="category-title">
            Badminton
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchSports('tennis')}>
          <div className="event-card">
          <div className="category-title">
            Tennis
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchSports('tabletennis')}>
          <div className="event-card">
          <div className="category-title">
            Table Tennis
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchSports('chess')}>
          <div className="event-card">
          <div className="category-title">
            Chess
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.props.fetchSports('snooker')}>
            <div className="event-card">
                <div className="category-title">
                    Snooker
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                </div>
            </div>
        </div>
          <div className="item" onClick={()=>this.props.fetchSports('throwball')}>
              <div className="event-card">
                  <div className="category-title">
                    Throwball
                    <br/>
                    <span className="category-subtitle">(Women only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchSports('basketball')}>
              <div className="event-card">
                  <div className="category-title">
                    Basketball
                    <br/>
                    <span className="category-subtitle">(Men & Women)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchSports('volleyball')}>
              <div className="event-card">
                  <div className="category-title">
                    Volleyball
                    <br/>
                    <span className="category-subtitle">(Men & Women)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchSports('handball')}>
              <div className="event-card">
                  <div className="category-title">
                    Handball
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchSports('hockey')}>
              <div className="event-card">
                  <div className="category-title">
                    Hockey
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchSports('cricket')}>
              <div className="event-card">
                  <div className="category-title">
                      Cricket
                      <br/>
                      <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.props.fetchSports('football')}>
              <div className="event-card">
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
