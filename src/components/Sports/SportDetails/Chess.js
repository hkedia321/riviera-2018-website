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

class Chess extends React.Component {
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
                  title="Chess"
                  subtitle="Men & Women"
                  style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}
                  titleColor='#fff'
                  subtitleColor='#9E9E9E'
                />
                <CardText
                  color='#fff'
                  style={{textAlign:'left'}}
                  >
                    <b>Rules and Regulations:</b>
                    <ul>
                      <li> From one college, Minimum 2 and maximum 5 participants from women’s team and
                    minimum 3 and maximum 5 participants from men’s team.</li>
                    <li>
                    Registration fee for a team is <FontAwesome name='rupee' style={{color:'#fff'}}/>1250/- (inclusive of all taxes plus GST).
                  </li>
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

  export default Chess
