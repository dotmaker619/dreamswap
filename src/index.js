import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/main.scss";

import Layout from "layouts/Dream.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Layout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
