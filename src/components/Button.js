/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

const Button = (props) => (
  <div
    role="button"
    tabIndex="0"
    className={props.classname}
    onClick={props.onClick}
    onKeyDown={props.onClick}
  >
    { props.content }
  </div>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
