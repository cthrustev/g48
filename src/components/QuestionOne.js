import React from 'react';

import '../views/landing.css';

class QuestionOne extends React.Component {
  render() {
    return (
       <div className="c-content" id="step-3-1">
        <h2 className="c-content__title">Mitu korda erineb keskmine palk Tallinnas ja Ida-Virumaal?</h2>
        <div className="c-btn-group c-btn-group--column c-btn-group--max">
          <button className="c-btn c-btn--primary">1,1</button>
          <button className="c-btn c-btn--primary">1,3</button>
          <button className="c-btn c-btn--primary">1,5</button>
        </div>
      </div>
    )
  }
};

export default QuestionOne;