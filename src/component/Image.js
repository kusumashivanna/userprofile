import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.image})`, 
          backgroundSize: `${this.props.size}`,
          width: "100%",
          height: "100%",
          borderRadius: `${this.props.borderRadius}`
        }}
      />
    );
  }
}
