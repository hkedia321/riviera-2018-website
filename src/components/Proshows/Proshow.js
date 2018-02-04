import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Selena from './../../images/proshows/selena.png';
import Badshah from './../../images/proshows/badshah.png';
import Shirley from './../../images/proshows/shirley.jpg';
import Saindhavi from './../../images/proshows/saindhavi.png';
import Vijay from './../../images/proshows/vijay.jpg';
import Amit from './../../images/proshows/amittrivedi.jpg';
import Zaeden from './../../images/proshows/zaden.jpg';

import { Grid, Row, Col } from 'react-flexbox-grid';
import './proshows.css';
import ProshowsNavbar from './ProshowsNavbar';
import SubTab from './ProshowsNavbar/SubTab';
class Proshows extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentTab:1,
            subTab:1
        }
    }
    handleTabChange = (x) =>{
        this.setState({
            currentTab:x,
            subTab:1
        })
    }
    handleSubTabChange = (x) =>{
        this.setState({
            subTab:x
        })
    }
    render() {

        return (
            <div className="proshows-component">
                <Grid fluid className="padding-0">
                    <Row>
                        <Col xs={12} md={12} className="proshow-col">
                            <ProshowsNavbar handleTabChange={this.handleTabChange} tab={this.state.currentTab} />
                            {true &&
                                <Row>
                                <Col md={6} xs={12}>
                                    <img src={Badshah} alt="" className="proshow-star-img" />
                                </Col>
                                <Col md={6} xs={12}>
                                <div>
                                    <h1 className="proshow-star-name">Badshah</h1>
                                    <h4>Day 1</h4>
                                    <p className="proshow-para text-white">
                                        Gear up people because <i>"abhi toh party shuru hui hai"</i>.
                                        All of us have tapped our feet to his Punjabi beats.
                                        He is one of India's leading rappers and he is all set to get you dancing.
                                        Are you ready for <b>Badshah</b>?
                                        <br/><br/>
                                        <b>Aditya Prateek Singh Sisodia</b>, better known by his stage name <b>Badshah</b>,
                                        is an Indian rapper known for his Hindi, Haryanvi, and Punjabi songs. He started his career in 2006 alongside Yo Yo Honey Singh
                                        in his Group Band Mafia Mundeer and gained spontaneous popularity among youth. His music has been featured in Bollywood
                                        soundtracks for films such as the 2014 film Humpty Sharma Ki Dulhania, and Sonam Kapoor starrer Khoobsurat.
                                    </p>
                                </div>
                                </Col>
                                </Row>
                            }
                            {true &&
                                <Row>
                                <div>
                                    {/*<SubTab handleTabChange={this.handleSubTabChange} tab={this.state.subTab}/>*/}
                                    {true &&
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <img src={Shirley} alt="" className="proshow-star-img" />
                                        </Col>
                                        <Col xs={12} md={6}>
                                        <div>
                                            <h1 className="proshow-star-name">Shirley Setia</h1>
                                            <h4>Day 2</h4>
                                            <p className="proshow-para text-white">
                                                We all have heard her amazing voice and enjoyed her creative mashups.
                                                Her YouTube channel has over a million subscribers.
                                                All the way from Auckland, New Zealand, we have <b>Shirley Setia</b>!
                                                <br/><br/>
                                                A graduate student from the University of Auckland and marketing and publicity intern at Auckland Council.
                                                She has collaborated with various YouTube artists from across US, UK, India and Canada. Four years,
                                                1.6 million subscribers and 114 M views later, she has now moved to Mumbai to pursue her dream of making it big in
                                                Bollywood. Forbes magazine's Rob Cain wrote a feature on her and her future goals recently in which he stated that
                                                "Bollywood's Next Big Singing Sensation Just Might Be This Tiny Kiwi".
                                            </p>
                                        </div>
                                        </Col>
                                        </Row>
                                    }
                                    {true &&
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <img src={Saindhavi} alt="" className="proshow-star-img" />
                                        </Col>
                                        <Col xs={12} md={6}>
                                        <div>
                                            <h1 className="proshow-star-name">Saindhavi</h1>
                                            <h4>Day 2</h4>
                                            <p className="proshow-para text-white">
                                                Riviera'18 is going to take us back to our roots with some outstanding classical music.
                                                And to help us do that we have <b>Saindhavi</b> with her melodious voice and ever so beautiful smile!
                                                <br/><br/>
                                                Music has always been a great passion for Saindhavi, who started her musical voyage from the very age of 7.
                                                She started performing at the early age of 9. Her strength in Carnatic music helped her in performing in
                                                various temples and traditional venues. She has her expertise in Carnatic classical and Film Music.
                                                <br/>
                                                She is also a connoisseur of Hindustani classical music and Western classical Music. Till date she has
                                                performed in over 1500 concerts all over the world.
                                            </p>
                                        </div>
                                        </Col>
                                        </Row>
                                    }
                                    {true &&
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <img src={Vijay} alt="" className="proshow-star-img" />
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <div>
                                                    <h1 className="proshow-star-name">Vijay Prakash</h1>
                                                    <h4>Day 2</h4>
                                                    <p className="proshow-para text-white">
                                                        He is an immensely talented singer who has captured the country's attention with his rhythm.
                                                        He can sing not in one, not in two but in five different languages!
                                                        Get ready people, because <b>Vijay Prakash</b> is coming to Riviera'18.
                                                        <br/><br/>
                                                        Vijay Prakash is an Indian music composer from Mysore, Karnataka. He has also performed in Kannada, Tamil, Telugu, Malayalam and Marathi movies.
                                                        He is one of the judges for the Kannada reality show Sa Re Ga Ma Pa on Zee Kannada and has also performed shows with Zakir Hussain.
                                                        He won the Karnataka Government's 'Best Playback Singer' award for the year 2016 for the song 'Nammooralli Chaligaladalli' from the
                                                        film Beautiful Manasugalu.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    }
                                </div>
                                </Row>
                            }
                            {true &&
                                <Row>
                                    <Col xs={12} md={6}>
                                        <img src={Amit} alt="" className="proshow-star-img" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div>
                                            <h1 className="proshow-star-name">Amit Trivedi</h1>
                                            <h2>Day 3</h2>
                                            <p className="proshow-para text-white">
                                                He has won our hearts with his beautiful voice and brilliant music compositions. He is one of India's most
                                                beloved and respected musicians.
                                                From 'Nayan Taarse' to 'Love You Zindagi', he has done it all.
                                                Riviera'18 brings to you <b>Amit Trivedi</b>!
                                                <br/><br/>
                                                <b>Amit Trivedi</b> is an Indian film composer, musician, singer and lyricist, working in Bollywood.
                                                After working as a theatre and jingle composer and composing for non-film albums, he debuted as a film
                                                composer in the 2008 Hindi film Aamir, and shot to fame in the Hindi film music scene with his critically
                                                acclaimed work in the more popular Dev.D, which earned him several accolades, including the 2010
                                                National Film Award for Best Music Direction for Dev.D
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            }
                            {true &&
                                <Row>
                                    <Col xs={12} md={6}>
                                        <img src={Zaeden} alt="" className="proshow-star-img" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div>
                                            <h1 className="proshow-star-name">DJ Zaeden</h1>
                                            <h4>Day 4</h4>
                                            <p className="proshow-para text-white">
                                                Get set VITians because you wouldn't want the night to end when he starts playing his beats!
                                                He is one of the most talented DJs that the country has seen so far.
                                                All praise the lord because <b>DJ Zaeden</b> is on his way to Riviera'18!
                                                <br/><br/>
                                                Sahil Sharma, better known by his stage name <b>Zaeden</b>, is an Indian DJ and record producer.
                                                 He is best known for his remixes of Coldplay's Magic, Maroon 5's Animals and Don't Wanna Know, and Justin Bieber's Love Yourself.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            }
                        </Col>
                        <Col className="padding-0 display-on-mobile-only" xs={12} md={6}>
                            {this.state.currentTab===1 &&
                                <img src={Badshah} alt="" className="proshow-star-img" />
                            }
                            {this.state.currentTab===2 && this.state.subTab===1 &&
                                <img src={Shirley} alt="" className="proshow-star-img" />
                            }
                            {this.state.currentTab===2 && this.state.subTab===2 &&
                                <img src={Saindhavi} alt="" className="proshow-star-img" />
                            }
                            {this.state.currentTab===2 && this.state.subTab===3 &&
                                <img src={Vijay} alt="" className="proshow-star-img" />
                            }
                            {this.state.currentTab===3 &&
                                <img src={Amit} alt="" className="proshow-star-img" />
                            }
                            {this.state.currentTab===4 &&
                                <img src={Zaeden} alt="" className="proshow-star-img" />
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(Proshows)