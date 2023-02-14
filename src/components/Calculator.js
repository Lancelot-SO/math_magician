import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <main>
      <div className="calculator">
        <div className="display">0</div>
        <div className="key">AC</div>
        <div className="key">+/-</div>
        <div className="key">%</div>
        <div className="key orange">&divide;</div>
        <div className="key">9</div>
        <div className="key">8</div>
        <div className="key">7</div>
        <div className="key orange">&times;</div>
        <div className="key">6</div>
        <div className="key">5</div>
        <div className="key">4</div>
        <div className="key orange">-</div>
        <div className="key">3</div>
        <div className="key zero">2</div>
        <div className="key">1</div>
        <div className="key orange">÷</div>
        <div id="zero" className="key">0</div>
        <div className="key">.</div>
        <div className="key orange">=</div>
      </div>
    </main>
  );
}

export default Calculator;
