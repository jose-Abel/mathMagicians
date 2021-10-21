import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const numbersHandler = (e) => {
    const { total, next, operation } = state;

    if (!total && !operation) {
      setState(
        {
          ...state,
          total: e.target.innerHTML,
        },
      );
    } else if (total && !operation) {
      setState(
        {
          ...state,
          total: total + e.target.innerHTML,
        },
      );
    } else if (total && operation && !next) {
      setState(
        {
          ...state,
          next: e.target.innerHTML,
        },
      );
    } else {
      setState(
        {
          ...state,
          next: next + e.target.innerHTML,
        },
      );
    }
  };

  const operationHandler = (e) => {
    setState(
      {
        ...state,
        operation: e.target.innerHTML,
      },
    );
  };

  const handleResults = (e) => {
    const calculation = calculate(state, e.target.innerHTML);

    setState(calculation);
  };

  const { total, next, operation } = state;

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
        onClick={handleResults}
      />

      <Button
        content="+/-"
        classname="plusminus general grayscale button"
        onClick={handleResults}
      />

      <Button
        content="%"
        classname="modulus general grayscale button"
        onClick={operationHandler}
      />

      <Button
        content="÷"
        classname="division general orange button"
        onClick={operationHandler}
      />

      <Button
        content="7"
        classname="seven general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="8"
        classname="eight general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="9"
        classname="nine general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="x"
        classname="multiplication general orange button"
        onClick={operationHandler}
      />

      <Button
        content="4"
        classname="four general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="5"
        classname="five general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="6"
        classname="six general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="-"
        classname="minus general orange button"
        onClick={operationHandler}
      />

      <Button
        content="1"
        classname="one general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="2"
        classname="two general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="3"
        classname="three general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="+"
        classname="plus general orange button"
        onClick={operationHandler}
      />

      <Button
        content="0"
        classname="zero general grayscale button"
        onClick={numbersHandler}
      />

      <Button
        content="."
        classname="dot general grayscale button"
        onClick={handleResults}
      />

      <Button
        content="="
        classname="equal general orange button"
        onClick={handleResults}
      />

    </div>
  );
};

export default Calculator;
