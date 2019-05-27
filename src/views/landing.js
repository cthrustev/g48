import React from 'react';
import { connect } from 'react-redux';
import StepZilla from "react-stepzilla";

import './landing.css';
import Logo from '../components/Logo.js';

import ActionBoxKnowledge from '../components/ActionBoxKnowledge.js';
import ActionBoxTopic from '../components/ActionBoxTopic.js';

import QuestionOne from '../components/QuestionOne.js';
import QuestionTwo from '../components/QuestionTwo.js';
import QuestionThree from '../components/QuestionThree.js';

import GenderChart from '../components/GenderChart.js';

import End from './end.js';

class Landing extends React.Component {
  steps = [
    { name: 'Knowledge', component: <ActionBoxKnowledge /> },
    { name: 'Topic', component: <ActionBoxTopic /> },
    { name: 'Question1', component: <QuestionOne /> },
    { name: 'Question2', component: <QuestionTwo /> },
    { name: 'Question3', component: <QuestionThree /> },
    { name: 'GenderChart', component: <GenderChart /> },
    { name: 'End', component: <End /> },
  ];

  render() {
    return (
      <div>
        <Logo />
        <div className='step-progress'>
          <StepZilla
            steps={this.steps}
            dontValidate={true}
            showNavigation={false}
            showSteps={false}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
          />
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    level: state.level,
    topic: state.topic,
  }
}

export default connect(mapStateToProps)(Landing);