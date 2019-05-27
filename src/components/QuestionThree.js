import React from 'react';

import '../views/landing.css';

class QuestionThree extends React.Component {
  render() {
    return (
      <div className="c-content" id="step-3-3">
        <h2 className="c-content__title">Millises maakonnas on elanike arv viimase 10a jooksul kõige rohkem kasvanud?</h2>
        <div className="c-btn-group c-btn-group--column c-btn-group--max">
          <button className="c-btn c-btn--primary">Harjumaa</button>
          <button className="c-btn c-btn--primary">Viljandimaa</button>
          <button className="c-btn c-btn--primary">Pärnumaa</button>
        </div>
      </div>
    )
  }
};

export default QuestionThree;