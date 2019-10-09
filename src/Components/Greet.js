import React, { Component } from "react";
import { BrowserRouter as router, route, Link } from "react-router-dom";
export default class Greet extends Component {
  render() {
    return (
      <div>
        <h>hello</h>
        <br></br>
        <Link to='/sub'>back</Link>
      </div>
    );
  }
}
