import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from '../../actions/profileActions';
//import Spinner from '../common/Spinner';

class Dashboard extends Component {
    componentDidMount() {
      this.props.getCurrentProfile();
    }

  render() {
    return (
        <div></div>
    )
}

export default Dashboard;
