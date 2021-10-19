import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">

        <div className="results general">
          <span className="results-span">0</span>
        </div>

        <div className="ac general grayscale">
          AC
        </div>

        <div className="plusminus general grayscale">
          +/-
        </div>

        <div className="percentage general grayscale">
          %
        </div>

        <div className="firstplus general orange">
          +
        </div>

        <div className="seven general grayscale">
          7
        </div>

        <div className="eight general grayscale">
          8
        </div>

        <div className="nine general grayscale">
          9
        </div>

        <div className="multiplication general orange">
          x
        </div>

        <div className="four general grayscale">
          4
        </div>

        <div className="five general grayscale">
          5
        </div>

        <div className="six general grayscale">
          6
        </div>

        <div className="minus general orange">
          -
        </div>

        <div className="one general grayscale">
          1
        </div>

        <div className="two general grayscale">
          2
        </div>

        <div className="three general grayscale">
          3
        </div>

        <div className="secondplus general orange">
          +
        </div>

        <div className="zero general grayscale">
          0
        </div>

        <div className="dot general grayscale">
          .
        </div>

        <div className="equal general orange">
          =
        </div>

      </div>
    );
  }
}

export default Calculator;
