import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../../actions';
import {Card} from 'material-ui/Card';
import classNames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './proshows-navbar.css';
class ProshowsNavbar extends Component {
    constructor(props) {
        super(props);

    }
    handleTabChange = (x) =>{
        this.props.handleTabChange(x);
    }
    render() {
        const item=this.props.tab;
        console.log(item)
        const class1=classNames({
            "proshows-nav-item":true,
            "proshows-nav-item-active":item===1
        });
        const class2=classNames({
            "proshows-nav-item":true,
            "proshows-nav-item-active":item===2
        });
        const class3=classNames({
            "proshows-nav-item":true,
            "proshows-nav-item-active":item===3
        });
        const class4=classNames({
            "proshows-nav-item":true,
            "proshows-nav-item-active":item===4
        });
        return (
            <div className="proshows-navbar-component">
                <br/><br/>
                <Link to='/'>
                  <RaisedButton primary={true} style={{backgroundColor:"rgba(0,0,0,0)",float:"right"}} label="Go back" backgroundColor="rgba(0,0,0,0)" buttonStyle={{backgroundColor:"rgba(0,0,0,0)"}} labelStyle={{color:"#fff",textTransform:"capitalize"}} />
                </Link>
                <br/><br/>
                {/*<span className={class1} onClick={()=>this.handleTabChange(1)}>*/}
                    {/*Day 1*/}
                {/*</span>*/}
                {/*<span className={class2} onClick={()=>this.handleTabChange(2)}>*/}
                    {/*Day 2*/}
                {/*</span>*/}
                {/*<span className={class3} onClick={()=>this.handleTabChange(3)}>*/}
                    {/*Day 3*/}
                {/*</span>*/}
                {/*<span className={class4} onClick={()=>this.handleTabChange(4)}>*/}
                    {/*Day 4*/}
                {/*</span>*/}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(ProshowsNavbar);
