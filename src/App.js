import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
// import { AnimatedSwitch } from 'react-router-transition';

import Salary from './components/SalaryChart';
import Gender from './components/GenderChart';
import Population from './components/PopulationChart';

import Landing from './views/landing.js';
import End from './views/end.js';
import './views/landing.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/end" exact component={End} />
        <Route path="/salary" exact component={Salary} />
        <Route path="/population" exact component={Population} />
        <Route path="/gendergap" exact component={Gender} />
      </BrowserRouter>
    )
  }
};


export default App;