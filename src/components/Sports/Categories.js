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
    fetchSports = (sport) =>{
      this.props.fetchSports(sport);
    }
  render(){
        console.log('Opacity',this.state.phenomenonOpacity);
    return(
      <div className='featured-container event-categories sports-categories' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
        <div className="arrow event-category-arrow left" onClick={()=>{this.scrollRight()}}><FontAwesome name="chevron-left"/></div>
        <div className="item" onClick={()=>this.fetchSports('swimming')}>
          <div className="event-card">
          <div className="category-title">
            Swimming
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('badminton')}>
          <div className="event-card">
          <div className="category-title">
            Badminton
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('tennis')}>
          <div className="event-card">
          <div className="category-title">
            Tennis
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('tabletennis')}>
          <div className="event-card">
          <div className="category-title">
            Table Tennis
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('chess')}>
          <div className="event-card">
          <div className="category-title">
            Chess
            <br/>
            <span className="category-subtitle">(Men & Women)</span>
          </div>
        </div>
        </div>
        <div className="item" onClick={()=>this.fetchSports('snooker')}>
            <div className="event-card">
                <div className="category-title">
                    Snooker
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                </div>
            </div>
        </div>
          <div className="item" onClick={()=>this.fetchSports('throwball')}>
              <div className="event-card">
                  <div className="category-title">
                    Throwball
                    <br/>
                    <span className="category-subtitle">(Women only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('basketball')}>
              <div className="event-card">
                  <div className="category-title">
                    Basketball
                    <br/>
                    <span className="category-subtitle">(Men & Women)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('volleyball')}>
              <div className="event-card">
                  <div className="category-title">
                    Volleyball
                    <br/>
                    <span className="category-subtitle">(Men & Women)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('handball')}>
              <div className="event-card">
                  <div className="category-title">
                    Handball
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('hockey')}>
              <div className="event-card">
                  <div className="category-title">
                    Hockey
                    <br/>
                    <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('cricket')}>
              <div className="event-card">
                  <div className="category-title">
                      Cricket
                      <br/>
                      <span className="category-subtitle">(Men only)</span>
                  </div>
              </div>
          </div>
          <div className="item" onClick={()=>this.fetchSports('football')}>
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
