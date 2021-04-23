import React, { useEffect } from "react";
import { connect } from "react-redux";

// if hosting to github pages, add basename to Router, set value as the repo name
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import { getAll } from "./actions/index";

function App({ getAll }) {
  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/battle" component={Battle} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, { getAll })(App);
