import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}
