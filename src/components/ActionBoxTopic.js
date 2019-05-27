import React from 'react';

import '../views/landing.css';
import { FaDollarSign, FaBalanceScale, FaGlobeEurope } from "react-icons/fa";

class ActionBoxTopic extends React.Component {
  render() {
    return (
      <div className="c-content">
        <h2 className="c-content__title">Mis teema sind huvitab?</h2>
        <div className="c-btn-group">
          <button className="c-btn c-btn--choice" onClick={() => this.props.jumpToStep(2)}>
            <FaDollarSign style={{ height: '4rem', width: '2rem', color: '#85bb65' }} />
            <span>Palgateemad</span>
          </button>
          <button className="c-btn c-btn--choice" onClick={() => this.props.jumpToStep(3)}>
            <FaBalanceScale style={{ height: '4rem', width: '3rem', color: '#ae65bb' }} />
            <span>Meeste-naiste võrdsus</span>
          </button>
          <button className="c-btn c-btn--choice" onClick={() => this.props.jumpToStep(4)}>
            <FaGlobeEurope style={{ height: '4rem', width: '3rem', color: '#0077be' }} />
            <span>Populatsioon</span>
          </button>
        </div>
      </div>
    )
  }
};

export default ActionBoxTopic;