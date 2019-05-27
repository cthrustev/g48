import React from 'react';
import ReactSVG from 'react-svg';

import logo from '../img/logo.svg';
import '../views/landing.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="c-logo">
        <ReactSVG src={logo} className="c-logo__img" />
        <span className="c-logo__text">Racing Charts</span>
      </div>
    )
  }
};

export default Logo;