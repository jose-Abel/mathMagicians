import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  numbersHandler = (e) => {
    const { total, next, operation } = this.state;

    if (!total && !operation) {
      this.setState({ total: e.target.innerHTML });
    } else if (total && !operation) {
      this.setState({ total: total + e.target.innerHTML });
    } else if (total && operation && !next) {
      this.setState({ next: e.target.innerHTML });
    } else {
      this.setState({ next: next + e.target.innerHTML });
    }
  }

  operationHandler = (e) => {
    this.setState({ operation: e.target.innerHTML });
  }

  handleResults = (e) => {
    const calculation = calculate(this.state, e.target.innerHTML);

    this.setState(calculation);
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculator">

        <div className="results general">
          <span className="results-span">
            { total || 0}
            { operation }
            { next }
          </span>
        </div>

        <div
          className="ac general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleResults}
          onKeyDown={this.handleResults}
        >
          AC
        </div>

        <div
          className="plusminus general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleResults}
          onKeyDown={this.handleResults}
        >
          +/-
        </div>

        <div
          className="percentage general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.operationHandler}
          onKeyDown={this.operationHandler}
        >
          %
        </div>

        <div
          className="firstplus general orange button"
          role="button"
          tabIndex="0"
          onClick={this.operationHandler}
          onKeyDown={this.operationHandler}
        >
          ÷
        </div>

        <div
          className="seven general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          7
        </div>

        <div
          className="eight general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          8
        </div>

        <div
          className="nine general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          9
        </div>

        <div
          className="multiplication general orange button"
          role="button"
          tabIndex="0"
          onClick={this.operationHandler}
          onKeyDown={this.operationHandler}
        >
          x
        </div>

        <div
          className="four general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          4
        </div>

        <div
          className="five general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          5
        </div>

        <div
          className="six general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          6
        </div>

        <div
          className="minus general orange button"
          role="button"
          tabIndex="0"
          onClick={this.operationHandler}
          onKeyDown={this.operationHandler}
        >
          -
        </div>

        <div
          className="one general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          1
        </div>

        <div
          className="two general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          2
        </div>

        <div
          className="three general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          3
        </div>

        <div
          className="secondplus general orange button"
          role="button"
          tabIndex="0"
          onClick={this.operationHandler}
          onKeyDown={this.operationHandler}
        >
          +
        </div>

        <div
          className="zero general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.numbersHandler}
          onKeyDown={this.numbersHandler}
        >
          0
        </div>

        <div
          className="dot general grayscale button"
          role="button"
          tabIndex="0"
          onClick={this.handleResults}
          onKeyDown={this.handleResults}
        >
          .
        </div>

        <div
          className="equal general orange button"
          role="button"
          tabIndex="0"
          onClick={this.handleResults}
          onKeyDown={this.handleResults}
        >
          =
        </div>

      </div>
    );
  }
}

export default Calculator;
