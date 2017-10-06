import React, {Component} from 'react'
import {pick} from "lodash/fp";
import {connect} from "react-redux";
import {withRouter, Route as RRoute, Switch as RSwitch} from "react-router-dom";
import { push } from 'react-router-redux'

export default class BaseLayout extends Component{
  componentWillMount() {
       push(this.props.location);
   }

   componentWillReceiveProps(nextProps) {
       push(nextProps.location);
   }

   render() {
       return React.Children.only(this.props.children);
   }
}

BaseLayout = withRouter(connect(null, {push})(BaseLayout));

const addLocation = connect(pick("location"));
export const Route = addLocation(RRoute);
export const Switch = addLocation(RSwitch);
