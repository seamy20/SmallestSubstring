import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

// Content
import Routes from './routes/Routes.js'

class App extends Component {
  render() {
    return (
        <Router >
          <div>
            <Routes />
          </div>
        </Router>
    );
  }
}

export default App;
