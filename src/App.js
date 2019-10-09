import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sign from "./Components/sub";
import Greet from "./Components/Greet";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Sign}></Route>
        <Route exact path='/sub' component={Sign}></Route>
        <Route path='/greet' component={Greet}></Route>
      </Router>
    </div>
  );
}

export default App;
