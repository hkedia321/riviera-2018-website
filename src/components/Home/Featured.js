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
      <div className='featured-container' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
            <div className="arrow left" onClick={()=>{this.scrollRight()}}><FontAwesome name="chevron-left"/></div>
            <div className="item">
              <div className={'phenomenon '+this.state.phenomenonClass} style={{opacity:this.state.phenomenonOpacity}}>
                <h2>The phenomenon</h2>
                <p>Riviera'17 will be packed with performances from cultural clubs to leading artists. Sports and daily events will enhance the fun</p>
              </div>
            </div>
            <div className="item">
              <div className="event-card events-specific-card">
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Events</div>
              </div>
            </div>
            <div className="item">
              <div className="event-card sports">
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Sports</div>
            </div>
            </div>
            <div className="item">
                <div className="event-card proshows">
                    <div className='overlay-layer'></div>
                    <div className='category-title'>Proshows</div>
                </div>
            </div>
            <div className="item">
              <div className="event-card previous">
                  <div className='overlay-layer'></div>
                  <div className='category-title'>Previous Events</div>
            </div>
            </div>
            <div className="arrow right" onClick={()=>{this.scrollLeft()}}><FontAwesome name="chevron-right"/></div>
      </div>
    )
  }
}

export default Featured
