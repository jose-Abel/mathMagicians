import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

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

        <Button
          content="AC"
          classname="ac general grayscale button"
          onClick={this.handleResults}
        />

        <Button
          content="+/-"
          classname="plusminus general grayscale button"
          onClick={this.handleResults}
        />

        <Button
          content="%"
          classname="modulus general grayscale button"
          onClick={this.operationHandler}
        />

        <Button
          content="÷"
          classname="division general orange button"
          onClick={this.operationHandler}
        />

        <Button
          content="7"
          classname="seven general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="8"
          classname="eight general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="9"
          classname="nine general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="x"
          classname="multiplication general orange button"
          onClick={this.operationHandler}
        />

        <Button
          content="4"
          classname="four general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="5"
          classname="five general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="6"
          classname="six general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="-"
          classname="minus general orange button"
          onClick={this.operationHandler}
        />

        <Button
          content="1"
          classname="one general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="2"
          classname="two general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="3"
          classname="three general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="+"
          classname="plus general orange button"
          onClick={this.operationHandler}
        />

        <Button
          content="0"
          classname="zero general grayscale button"
          onClick={this.numbersHandler}
        />

        <Button
          content="."
          classname="dot general grayscale button"
          onClick={this.handleResults}
        />

        <Button
          content="="
          classname="equal general orange button"
          onClick={this.handleResults}
        />

      </div>
    );
  }
}

export default Calculator;
