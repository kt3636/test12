import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPage: 10,
      name: ""
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      numberOfPage: this.state.numberOfPage + 1
    });
  }

  render() {
    return (
      <div className="temp">
        <h1>Just for test</h1>
        <h1>{this.state.numberOfPage}</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.increaseCount}
        >
          Count++
        </button>

        <input
          id="jobNameValueId"
          type="text"
          onChange={(event) =>
            this.setState({
              name: event.target.value
            })
          }
          value={this.state.name}
          className="textBoxXL m-3"
          maxLength={100}
        />

        <div>The name is {this.state.name}</div>
      </div>
    );
  }
}
