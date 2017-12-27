
import CircularProgress from 'material-ui/CircularProgress';
import React from 'react';

class Loading extends React.Component {
    render(){
        return(
            <div className="center">
            <CircularProgress size={80} thickness={5} color="#ddd" />
        </div>
        )
    }
}
export default Loading;
