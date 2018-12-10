import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import MainView from './components/MainView';

class App extends Component {
  render() {
    return (
        <Router>
          <MainView />
        </Router>
    );
  }
}

export default App;
