import React from 'react';
import { connect } from 'react-redux';

import '../views/landing.css';
import { changeLevel } from '../actions';

class ActionBoxKnowledge extends React.Component {
  changeLevelHigh = () => {
    this.props.changeLevel('high');
    this.props.jumpToStep(1);
  }
  changeLevelMed = () => {
    this.props.changeLevel('med');
    this.props.jumpToStep(1);
  }
  changeLevelLow = () => {
    this.props.changeLevel('low');
    this.props.jumpToStep(1);
  }

  render() {
    return (
      <div className="c-content">
        <h2 className="c-content__title">Kui palju sa tead Eestist?</h2>
        <div className="c-btn-group">
          <button className="c-btn c-btn--primary" onClick={this.changeLevelHigh}>Väga hästi</button>
          <button className="c-btn c-btn--primary" onClick={this.changeLevelMed}>Keskmiselt</button>
          <button className="c-btn c-btn--primary" onClick={this.changeLevelLow}>Ei tea eriti</button>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return { 
    level: state.level,
  };
};

export default connect(mapStateToProps, { changeLevel })(ActionBoxKnowledge);