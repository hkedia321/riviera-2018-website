import React from 'react'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import {
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions
} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import FontAwesome from 'react-fontawesome'
import {Row,Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';

class Swimming extends React.Component {
  state={

  }
  render(){

    return(
      <div className='events-list'>

        <div>
          <Row style={{width:'100%'}} top='md'>
            <Col md={8} mdOffset={2} xs={12}>
              <Card style={{margin:'20px',background:'#232323',color:'#fff'}}>
                <CardTitle
                  title="Swimming"
                  subtitle="Men & Women"
                  style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}
                  titleColor='#fff'
                  subtitleColor='#9E9E9E'
                />
                <CardText
                    color='#fff'
                    style={{textAlign:'left'}}
                    >
                        <b>There are 8 categories in swimming</b>
                        <ul>
                            <li> Freestyle- 50 m &amp; 100 m</li>
                            <li> Backstroke – 50 m &amp; 100m</li>
                            <li> Breaststroke – 50 m &amp; 100 m</li>
                            <li> Butterfly – 50m &amp; 100 m</li>
                        </ul>
                        <b>Rules and Regulations:</b>
                        <ul>
                            <li> From one college, only 2 participants can participate in one event.</li>
                            <li> One Participant can participate in maximum 3 events.</li>
                            <li> It is an individual event only.</li>
                            <li> Registration Fee is &nbsp;<FontAwesome name='rupee' style={{color:'#fff'}}/> 250.</li>
                        </ul>
                    </CardText>

                  <CardActions>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </div>

        </div>
      )
    }
  }

  export default Swimming
