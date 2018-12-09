import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
        <Router>
          <SideBar></SideBar>
          <MainView></MainView>
        </Router>
    );
  }
}

export default App;
