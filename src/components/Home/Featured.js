import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

const styles={
  featuredContainer:{
    display:'inline-flex',
    width:'100%',
    overflowX:'scroll',
    scrollbar:'hidden'
  },
  child:{ width: `250px`, height: `100%`,padding:'20px'},
  parent:{  height: `300px`}
}

class Featured extends React.Component {
  render(){
    return(
      <div className='featured-container'>
        <div style={styles.parent}>
          <HorizontalScroll reverseScroll={true}>
            <div className='phenomenon'>
              <h2>The phenomenon</h2>
              <p>Riviera'17 will be packed with performances from cultural clubs to leading artists. Sports and daily events will enhance the fun</p>
            </div>
              <div style={styles.child}>
                <div className="event-card">
                  Hello!
                </div>
              </div>
              <div style={styles.child}>
                <div className="event-card">
                  Hello!
                </div>
              </div>
              <div style={styles.child}>
                <div className="event-card">
                  Hello!
                </div>
              </div>
          </HorizontalScroll>
        </div>
      </div>
    )
  }
}

export default Featured
