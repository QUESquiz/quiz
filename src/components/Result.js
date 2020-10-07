import React from 'react';
import PropTypes from 'prop-types';
import { Transition} from 'react-transition-group';
function Result(props) {
  return (
    <Transition
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
    </Transition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
