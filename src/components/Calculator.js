import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    const targetValue = e.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, targetValue));
  }

  render() {
    const { total, operation, next } = this.state;
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
          <button onClick={this.onClickHandler} value="AC" className="key" type="button">AC</button>
          <button onClick={this.onClickHandler} value="%" className="key" type="button">%</button>
          <button onClick={this.onClickHandler} value="+/-" className="key" type="button">+/-</button>
          <button onClick={this.onClickHandler} value="&divide;" className="key orange" type="button">&divide;</button>
          <button onClick={this.onClickHandler} value="9" className="key" type="button">9</button>
          <button onClick={this.onClickHandler} value="8" className="key" type="button">8</button>
          <button onClick={this.onClickHandler} value="7" className="key" type="button">7</button>
          <button onClick={this.onClickHandler} value="&times;" className="key orange" type="button">&times;</button>
          <button onClick={this.onClickHandler} value="6" className="key" type="button">6</button>
          <button onClick={this.onClickHandler} value="5" className="key" type="button">5</button>
          <button onClick={this.onClickHandler} value="4" className="key" type="button">4</button>
          <button onClick={this.onClickHandler} value="-" className="key orange" type="button">-</button>
          <button onClick={this.onClickHandler} value="3" className="key" type="button">3</button>
          <button onClick={this.onClickHandler} value="2" className="key zero" type="button">2</button>
          <button onClick={this.onClickHandler} value="1" className="key" type="button">1</button>
          <button onClick={this.onClickHandler} value="+" className="key orange" type="button">+</button>
          <button onClick={this.onClickHandler} id="zero" value="0" className="key" type="button">0</button>
          <button onClick={this.onClickHandler} value="." className="key" type="button">.</button>
          <button onClick={this.onClickHandler} value="=" className="key orange" type="button">=</button>
        </div>

      </main>
    );
  }
}

export default Calculator;
