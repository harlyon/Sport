import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NRoute from './components/NRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NRoute />
        </Router>
      </div>
    );
  }
}

export default App;
