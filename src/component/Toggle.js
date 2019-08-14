import React, { Component } from "react";
import styles from "./Toggle.module.css";
export default class Toggle extends Component {
  render() {
    return (
      <label className={styles.switch}>
        {this.props.children}
        <input type="checkbox" />
        <span className={styles.slider} />
      </label>
    );
  }
}
