import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ModularComponent from "./modularComponent";
export default class sub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "esh",
      password: "abcd"
    };
  }
  render() {
    return (
      <div>
        <ModularComponent
          fileName={this.state.userName}
          pass={this.state.password}
        />
        <ModularComponent
          data={this.state.userName}
          password={this.state.password}
        />
      </div>
    );
  }
}
