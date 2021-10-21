import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { content, classname, onClick } = props;
  return (
    <div
      role="button"
      tabIndex="0"
      className={classname}
      onClick={onClick}
      onKeyDown={onClick}
    >
      { content }
    </div>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
