import React, { Component } from "react";
import styles from "./Profile.module.css";
//import Toggle from "./Toggle.module.css";
import "../App";
import IconWithInput from "./IconWithInput";
import Image from "./Image";
import Toggle from "./Toggle";
import Button from "./Button";
export default class Profile extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.ProfileHolder}>
          <Image image={this.props.Image} size="cover" borderRadius="50%" />
        </div>
        <div className={styles.username}>{this.props.Uname}</div>

        <div className={styles.UserDetails}>
          <div>{this.props.userprofile}</div>
          <div className={styles.Profile}>{this.props.name}</div>
          <IconWithInput
            icon={this.props.usericon}
            type="text"
            placeholder="Enter user name"
            border="none"
          />
          <div className={styles.Profile}>{this.props.email}</div>
          <IconWithInput
            icon={this.props.email1}
            type="text"
            placeholder="Enter user mailId"
            border="none"
          />
          <div className={styles.Profile}>{this.props.mobile}</div>
          <IconWithInput
            icon={this.props.mobile1}
            type="text"
            placeholder="Enter your 10 digit number"
            border="none"
          />
          <div className={styles.Profile}>{this.props.dob}</div>
          <IconWithInput
            icon={this.props.calender}
            type="text"
            placeholder="DD/MM/YY"
            border="none"
          />
          <div className={styles.Profile}>{this.props.sex}</div>
          <div className={styles.toggleHolde}>
            <Toggle>{this.props.male}</Toggle>
            <Toggle>{this.props.female}</Toggle>
          </div>
          <Button>{this.props.save}</Button>
        </div>
      </div>
    );
  }
}
