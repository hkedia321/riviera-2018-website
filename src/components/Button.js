import React from 'react'
import './Button.css';
import Zoom from 'react-reveal/Zoom';

class Button extends React.Component {
    render(){
            return(
                <div>
                {this.props.noRevealAnimation?
                    <div>
                        {this.props.orange?
                            <div className='rajat-button rajat-button-orange' onClick={this.props.onClick?this.props.onClick:null} >
                                <span>{this.props.text}</span>
                            </div>
                            :
                            <div className='rajat-button' onClick={this.props.onClick?this.props.onClick:null}>
                                <span>{this.props.text}</span>
                            </div>
                        }
                    </div>
                :
                <Zoom delay={500}>
                    <div>
                        {this.props.orange?
                            <div className='rajat-button rajat-button-orange' onClick={this.props.onClick?this.props.onClick:null} >
                                <span>{this.props.text}</span>
                            </div>
                            :
                            <div className='rajat-button' onClick={this.props.onClick?this.props.onClick:null}>
                                <span>{this.props.text}</span>
                            </div>
                        }
                    </div>
                </Zoom>
                }
            </div>
            );
    }
}

{/*<div className='button-container'>
<button
href={this.props.href}
className='rajat-button'>
​ <span style={{color:'#fff'}}>{this.props.text}</span>
</button>

</div>*/}

export default Button
