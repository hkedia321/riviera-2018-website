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
class SubTab extends Component {
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
        return (
            <div className="proshows-navbar-component center">
                <br/><br/>
                <span className={class1} onClick={()=>this.handleTabChange(1)}>
                    Shirley Setia
                </span>
                <span className={class2} onClick={()=>this.handleTabChange(2)}>
                    Saindhavi
                </span>
                <span className={class3} onClick={()=>this.handleTabChange(3)}>
                    Vijay Prakash
                </span>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps,actions)(SubTab);
