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

class Featured extends React.Component {
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
                phenomenonOpacity:this.state.phenomenonOpacity+0.1
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
      <div className='featured-container' onScroll={(e)=>{this.managePhenomenon(e)}} id="featured">
        <div className="item">
          <div className="phenomenon" style={{opacity:this.state.phenomenonOpacity}}>
            <h2>The phenomenon</h2>
              <p>Riviera'17 will be packed with performances from cultural clubs to leading artists. Sports and daily events will enhance the fun</p>
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
        <div className="item">
          <div className="event-card">
          Hello!
        </div>
        </div>
        <div>
          {/*<HorizontalScroll reverseScroll={true}>*/}
            {/*<div className='phenomenon'>*/}
              {/*<h2>The phenomenon</h2>*/}
              {/*<p>Riviera'17 will be packed with performances from cultural clubs to leading artists. Sports and daily events will enhance the fun</p>*/}
            {/*</div>*/}
              {/*<div style={styles.child}>*/}
                {/*<div className="event-card">*/}
                  {/*Hello!*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div style={styles.child}>*/}
                {/*<div className="event-card">*/}
                  {/*Hello!*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div style={styles.child}>*/}
                {/*<div className="event-card">*/}
                  {/*Hello!*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div style={styles.child}>*/}
                {/*<div className="event-card">*/}
                  {/*Hello!*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div style={styles.child}>*/}
                {/*<div className="event-card">*/}
                  {/*Hello!*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div style={styles.child}>*/}
                {/*<div className="event-card">*/}
                  {/*Hello!*/}
                {/*</div>*/}
              {/*</div>*/}
          {/*</HorizontalScroll>*/}
        </div>
      </div>
    )
  }
}

export default Featured
