import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialState = {
    total: 0,
    next: '',
    operation: '',
  };

  // using the useState hook
  const [state, setState] = useState(initialState);

  // CLICK FUNCTION
  const onClickHandler = (e) => {
    const targetValue = e.target.value;
    const updatestate = calculate(state, targetValue);
    setState(updatestate);
  };

  // destructuring the array
  const { total, operation, next } = state;

  return (
    <main>
      <div className="calculator">
        <div className="display">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
          {' '}
        </div>
        <button onClick={onClickHandler} value="AC" className="key" type="button">AC</button>
        <button onClick={onClickHandler} value="%" className="key" type="button">%</button>
        <button onClick={onClickHandler} value="+/-" className="key" type="button">+/-</button>
        <button onClick={onClickHandler} value="&divide;" className="key orange" type="button">&divide;</button>
        <button onClick={onClickHandler} value="9" className="key" type="button">9</button>
        <button onClick={onClickHandler} value="8" className="key" type="button">8</button>
        <button onClick={onClickHandler} value="7" className="key" type="button">7</button>
        <button onClick={onClickHandler} value="x" className="key orange" type="button">&times;</button>
        <button onClick={onClickHandler} value="6" className="key" type="button">6</button>
        <button onClick={onClickHandler} value="5" className="key" type="button">5</button>
        <button onClick={onClickHandler} value="4" className="key" type="button">4</button>
        <button onClick={onClickHandler} value="-" className="key orange" type="button">-</button>
        <button onClick={onClickHandler} value="3" className="key" type="button">3</button>
        <button onClick={onClickHandler} value="2" className="key zero" type="button">2</button>
        <button onClick={onClickHandler} value="1" className="key" type="button">1</button>
        <button onClick={onClickHandler} value="+" className="key orange" type="button">+</button>
        <button onClick={onClickHandler} id="zero" value="0" className="key" type="button">0</button>
        <button onClick={onClickHandler} value="." className="key" type="button">.</button>
        <button onClick={onClickHandler} value="=" className="key orange" type="button">=</button>
      </div>
    </main>
  );
};

export default Calculator;
