import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButton = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    return (
      <div className="calculator">

        <div className="results general">
          <span className="results-span">0</span>
        </div>

        <div
          className="ac general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          AC
        </div>

        <div
          className="plusminus general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          +/-
        </div>

        <div
          className="percentage general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          %
        </div>

        <div
          className="firstplus general orange button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          +
        </div>

        <div
          className="seven general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          7
        </div>

        <div
          className="eight general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          8
        </div>

        <div
          className="nine general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          9
        </div>

        <div
          className="multiplication general orange button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          x
        </div>

        <div
          className="four general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          4
        </div>

        <div
          className="five general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          5
        </div>

        <div
          className="six general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          6
        </div>

        <div
          className="minus general orange button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          -
        </div>

        <div
          className="one general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          1
        </div>

        <div
          className="two general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          2
        </div>

        <div
          className="three general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          3
        </div>

        <div
          className="secondplus general orange button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          +
        </div>

        <div
          className="zero general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          0
        </div>

        <div
          className="dot general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          .
        </div>

        <div
          className="equal general orange button"
          role="button"
          tabIndex="0"
          onClick={this.handleButton}
          onKeyDown={this.handleButton}
        >
          =
        </div>

      </div>
    );
  }
}

export default Calculator;
