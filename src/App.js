import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { AnimatedSwitch } from 'react-router-transition';

import Steven from './views/steven.js';
import Kaarel from './views/kaarel.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/steven" exact component={Steven} />
        <Route path="/kaarel" exact component={Kaarel} />
      </BrowserRouter>
    )
  }
};


export default App;