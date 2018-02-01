import React from 'react';
import FontAwesome from 'react-fontawesome'
import {
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions
} from 'material-ui/Card'


class NoEventsFound extends React.Component {

    render(){
        return (
            <div className="center">
            <Card style={{margin:'auto',paddingTop:"10px",textAlign:"center",background:'#232323',color:'#fff',width:"200px",maxWidth:"90vw"}}>
              <CardText
                color='#fff'
                style={{textAlign:'center'}}
              >
                <FontAwesome size="2x" name="exclamation-triangle"/>
                <h2 className="center margin-bottom-0">No Events Found</h2>
              </CardText>
            </Card>
        </div>
        )
    }
}

export default NoEventsFound;
