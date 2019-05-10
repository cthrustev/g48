import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
// import { AnimatedSwitch } from 'react-router-transition';

import Salary from './components/SalaryChart';
import Gender from './components/GenderChart';
import Population from './components/PopulationChart';
import Kaarel from './views/kaarel.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/salary" exact component={Salary} />
        <Route path="/population" exact component={Population} />
        <Route path="/gendergap" exact component={Gender} />

        <Route path="/kaarel" exact component={Kaarel} />
      </BrowserRouter>
    )
  }
};


export default App;