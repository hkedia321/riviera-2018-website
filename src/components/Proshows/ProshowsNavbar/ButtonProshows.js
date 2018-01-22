import React from 'react'
import Zoom from 'react-reveal/Zoom';

class ButtonProshows extends React.Component {
    render(){
        return(
            <span>
                <div className='rajat-button proshows-button' onClick={this.props.onClick?this.props.onClick:null}>
                    <span>{this.props.text}</span>
                </div>
            </span>
        );
    }
}

export default ButtonProshows
