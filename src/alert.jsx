import React, { Component } from "react";

export default class Alert extends Component {
  constructor(props) {
    super(props);

    this.work = this.work.bind(this);
  }

  work() {
    alert("Sample Alert");
  }

  render() {
    return (
      <button className="m-2" onClick={this.work}>
        Click for Alert
      </button>
    );
  }
}
