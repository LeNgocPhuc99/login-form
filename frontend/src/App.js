import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Alert from "./components/Alert/Alert";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="outer">
          <div className="inner">
            <Alert errorMessage={errorMessage} hideError={setErrorMessage} />
            <Switch>
              <Route exact path="/">
                <Login showError={setErrorMessage} />
              </Route>
              <Route path="/login">
                <Login showError={setErrorMessage} />
              </Route>
              <Route path="/register">
                <Register showError={setErrorMessage} />
              </Route>
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
