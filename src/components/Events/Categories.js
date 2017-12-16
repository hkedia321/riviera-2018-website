import React from 'react'

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
        console.log('Scroll Position:',scrollPosition,'magnitude',magnitude)
        if(magnitude<0 && this.state.phenomenonOpacity>0){
            this.setState({
                phenomenonOpacity:this.state.phenomenonOpacity-0.033
            })
        }
        else if(magnitude>0 && this.state.phenomenonOpacity<1){
            this.setState({
                phenomenonOpacity:this.state.phenomenonOpacity+0.033
            })
        }

        if(scrollPosition>400){
            this.setState({
                phenomenonOpacity:0
            })
        }
        if(scrollPosition===0){
            this.setState({
                phenomenonOpacity:1
            })
        }
    }
  render(){
        console.log('Opacity',this.state.phenomenonOpacity)
    return(
      <div className='featured-container event-categories' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
        <div className="item">
          <div className="event-card">
          Hello!
        </div>
        </div>
        <div className="item">
          <div className="event-card">
          Hello!
        </div>
        </div>
        <div className="item">
          <div className="event-card">
          Hello!
        </div>
        </div>
        <div className="item">
          <div className="event-card">
          Hello!
        </div>
        </div>
        <div className="item">
          <div className="event-card">
          Hello!
        </div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default Categories
