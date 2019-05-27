import React from 'react';

import '../views/landing.css';

class QuestionTwo extends React.Component {
  render() {
    return (
      <div className="c-content" id="step-3-2">
        <h2 className="c-content__title">Kui palju teenivad mehed rohkem kui naised?</h2>
        <div className="c-btn-group c-btn-group--column c-btn-group--max">
          <button className="c-btn c-btn--primary" onClick={() => this.props.jumpToStep(5)}>15%</button>
          <button className="c-btn c-btn--primary" onClick={() => this.props.jumpToStep(5)}>25%</button>
          <button className="c-btn c-btn--primary" onClick={() => this.props.jumpToStep(5)}>ei teenigi rohkem</button>
        </div>
      </div>
    )
  }
};

export default QuestionTwo;