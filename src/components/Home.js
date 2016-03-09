/* @flow */
import Radium from "radium"
import React, { Component, PropTypes } from "react";

@Radium
export default class Home extends Component {
  render () {
    return (
      <div style={styles.header}>Hello World!</div>
    );
  }
}

const styles = {
    header: {
        color: "green"
    }
};