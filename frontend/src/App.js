import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
