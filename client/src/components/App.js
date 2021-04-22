import React, { useEffect } from "react";
import { connect } from "react-redux";

// if hosting to github pages, add basename to Router, set value as the repo name
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import { getAll } from "../actions/index";

function App({ getAll }) {
  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, { getAll })(App);
