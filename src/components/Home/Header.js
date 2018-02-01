import React from 'react'
import HeaderBg from '../../images/header-bg.jpeg'
import Parallax from 'parallax-js'
import Fade from 'react-reveal/Fade';


class Header extends React.Component {
  componentDidMount(){
    var scene = document.getElementById('scene')
    var parallaxInstance = new Parallax(scene)
  }
  render(){
    return(
      <div className='header' id='scene'>
        <div className='header-bg' data-depth='0.3'>
          <img src='rivieralogo.png' className='logo'/>
        </div>
        <div className='tt' data-depth='0.7'>
          <img src='/tt.png'
            style={{
              position:'absolute',
              right:'0px',
              bottom:'0px',
              width:'100%'
            }}
          />
        </div>


        <div className='sjt' data-depth='0.4'>
          <img src='/sjt.png'
            style={{
              position:'absolute',
              left:'0',
              bottom:'200px',
              width:'100%'
            }}
            className='sjt-image'
          />
        </div>
      </div>
    )
  }
}

export default Header
