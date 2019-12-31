import React from "react";
import { Switch, Route } from 'react-router-dom';

// Main Content (Top Nav Links)
import SmallestSubstring from '../pages/SmallestSubstring.js'


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={SmallestSubstring} />
      </Switch>
    );
  }
}
export default Routes;
