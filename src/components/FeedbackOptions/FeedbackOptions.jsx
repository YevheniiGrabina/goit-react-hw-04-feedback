import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
        className={s.buttonFeedback}
      >
        {button}
      </button>
    );
  });
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


    

