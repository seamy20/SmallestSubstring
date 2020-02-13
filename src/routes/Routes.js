import React from "react";
import { Switch, Route } from 'react-router-dom';

// Main Content (Top Nav Links)
import SmallestSubstring from '../pages/SmallestSubstring.js'
import BruteForce from '../pages/BruteForce.js'


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={SmallestSubstring} />
        <Route path="/bruteforce" exact component={BruteForce} />
      </Switch>
    );
  }
}
export default Routes;
