import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ModularComponent extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        User :
        <input
          type='text'
          placeholder='ENTER NAME'
          value={this.props.fileName}
        ></input>
        <br></br>
        Password: <input type='password' value={this.props.password}></input>
        <br></br>
        <Link to='/greet'>Go</Link>
      </div>
    );
  }
}
