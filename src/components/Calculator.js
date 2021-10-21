/* eslint-disable max-len */
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

  const buttonsObjProperties = [
    { content: 'AC', classname: 'ac general grayscale button', event: handleResults },
    { content: '+/-', classname: 'plusminus general grayscale button', event: handleResults },
    { content: '%', classname: 'modulus general grayscale button', event: operationHandler },
    { content: '÷', classname: 'division general orange button', event: operationHandler },
    { content: '7', classname: 'seven general grayscale button', event: numbersHandler },
    { content: '8', classname: 'eight general grayscale button', event: numbersHandler },
    { content: '9', classname: 'nine general grayscale button', event: numbersHandler },
    { content: 'x', classname: 'multiplication general orange button', event: operationHandler },
    { content: '4', classname: 'four general grayscale button', event: numbersHandler },
    { content: '5', classname: 'five general grayscale button', event: numbersHandler },
    { content: '6', classname: 'six general grayscale button', event: numbersHandler },
    { content: '-', classname: 'minus general orange button', event: operationHandler },
    { content: '1', classname: 'one general grayscale button', event: numbersHandler },
    { content: '2', classname: 'two general grayscale button', event: numbersHandler },
    { content: '3', classname: 'three general grayscale button', event: numbersHandler },
    { content: '+', classname: 'plus general orange button', event: operationHandler },
    { content: '0', classname: 'zero general grayscale button', event: numbersHandler },
    { content: '.', classname: 'dot general grayscale button', event: handleResults },
    { content: '=', classname: 'equal general orange button', event: handleResults },
  ];

  return (
    <div className="calculator">

      <div className="results general">
        <span className="results-span">
          { total || 0}
          { operation }
          { next }
        </span>
      </div>

      {buttonsObjProperties.map((objProperties) => (
        <Button key={objProperties.content} content={objProperties.content} classname={objProperties.classname} onClick={objProperties.event} />
      ))}

    </div>
  );
};

export default Calculator;
