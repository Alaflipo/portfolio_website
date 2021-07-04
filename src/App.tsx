/** Import external libraries */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

/** Import components */
import Home from "./homepage/Home"

const App = (): JSX.Element => {

  return (
    <Router>
      {/*All our Routes goes here!*/}
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App; 