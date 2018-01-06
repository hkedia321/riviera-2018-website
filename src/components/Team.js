import React from 'react'
import Navbar from './Navbar/Navbar'
import Fade from 'react-reveal/Fade'
import './Team/Team.css'

class Team extends React.Component{
    render(){
        return(
            <div className='team-page'>
                <Navbar fontColor='#fff'/>
                <div className="header-featured header-campus">
                    <div>
                        <div className="overlay"></div>
                        <Fade delay={100}>
                            <h1 className="header-heading center text-white">Team</h1>
                        </Fade>
                        <Fade delay={200}>
                            <h3 className="center header-subheading">The people who make it happen!</h3>
                        </Fade>
                    </div>
                </div>
                <div className='container'>
                    <div className='row' style={{margin:'20px',textAlign:'center',color:'#fff'}}>
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-4 team-member'>
                            <h1 style={{color:'#fff'}}>Our Patron</h1>
                            <img src='svg/team/gv.png'/>
                            <br/>
                            <h3>Dr. G. Viswanathan</h3>
                            <h4>Chancellor & Founder, VIT University</h4>
                        </div>
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-12'>
                            <h2>Our Co-Patrons</h2>
                        </div>
                        <div className='col-md-3'>

                        </div>
                        <div className='col-md-2 team-member'>
                            <img src='svg/team/ShankarV.png'/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Mr. Sankar Viswanathan</strong></h5>
                            <h6 className="subtitle-2">Vice President, VIT University</h6>
                        </div>
                        <div className='col-md-2 team-member'>
                            <img src='svg/team/shekharv.jpg'/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Dr. Sekar Viswanathan</strong></h5>
                            <h6 className="subtitle-2">Vice President, VIT University</h6>
                        </div>
                        <div className='col-md-2 team-member'>
                            <img src='svg/team/gvs.jpg'/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Mr. G. V. Selvam</strong></h5>
                            <h6 className="subtitle-2">Vice President, VIT University</h6>
                        </div>
                        <div className='col-md-3'>

                        </div>
                        <div className='col-md-3'>

                        </div>
                        <div className='col-md-2 team-member'>
                            <img src='svg/team/AAS.png'/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Dr. Anand A. Samuel</strong></h5>
                            <h6 className="subtitle-2">Vice Chancellor, VIT University</h6>
                        </div>
                        <div className='col-md-2 team-member'>
                            <img src='/svg/team/VR.png'/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Dr. V. Raju</strong></h5>
                            <h6 className="subtitle-2">Pro-Vice Chancellor, VIT University</h6>
                        </div>
                        <div className='col-md-2 team-member'>
                            <img src='/svg/team/SN.png'/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Dr. S. Narayanan</strong></h5>
                            <h6 className="subtitle-2">Pro-Vice Chancellor, VIT University</h6>
                        </div>
                        <div className='col-md-3'>

                        </div>
                        <h1 className='col-md-12' style={{textAlign:'center'}}>Convenor</h1>
                        <div className='col-md-4'></div>
                        <div className='col-md-4 team-member'>
                            <img src="svg/team/pss.jpg" alt="SEO NAME"/>
                            <br/>
                            <h5 className="team-name uppercase"><strong>Prof. Sasikumar S</strong></h5>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-12' style={{textAlign:'center'}}>Co-Convenors</div>

                        <div className='col-md-3 team-member'>
                                <img src="svg/team/pvg.jpg"/>
                                    <br/>
                                    <h5 className="team-name uppercase"><strong>Prof. Velmurugan G.</strong></h5>
                                    <h6 className="subtitle-2">Co-Convenor</h6>
                            </div>

                        <div className='col-md-3 team-member'>
                                <img src="svg/team/deepam.jpg"/>
                                    <br/>
                                    <h5 className="team-name uppercase"><strong>Prof. Deepa M.</strong></h5>
                                    <h6 className="subtitle-2">Co-Convenor</h6>
                            </div>
                        <div className='col-md-3 team-member'>
                                <img src="svg/team/psm.jpg"/>
                                    <br/>
                                    <h5 className="team-name uppercase"><strong>Prof. Senthilkumar M</strong></h5>
                                    <h6 className="subtitle-2">Co-Convenor</h6>
                        </div>
                        <div className='col-md-3 team-member'>
                                <img src="svg/team/pscv.jpg"/>
                                    <br/>
                                    <h5 className="team-name uppercase"><strong>Prof. Sudheer C.V.</strong></h5>
                                    <h6 className="subtitle-2">Co-Convenor</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team