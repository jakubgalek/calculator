import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Błąd');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleToggleSign = () => {
    if (input) {
      setInput((parseFloat(input) * -1).toString());
    }
  };

  const handleAdvanced = (func) => {
    let value = parseFloat(input);
    if (func === 'sqrt') {
      setInput(Math.sqrt(value).toString());
    } else if (func === 'square') {
      setInput(Math.pow(value, 2).toString());
    } else if (func === 'sin') {
      setInput(Math.sin(value).toString());
    } else if (func === 'cos') {
      setInput(Math.cos(value).toString());
    } else if (func === 'tan') {
      setInput(Math.tan(value).toString());
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {/* Funkcje */}
        <div className="functions">
          <button onClick={() => handleAdvanced('sqrt')} className="btn advanced">√</button>
          <button onClick={() => handleAdvanced('square')} className="btn advanced">x²</button>
          <button onClick={() => handleAdvanced('sin')} className="btn advanced">sin</button>
          <button onClick={() => handleAdvanced('cos')} className="btn advanced">cos</button>
          <button onClick={() => handleAdvanced('tan')} className="btn advanced">tan</button>
        </div>

        {/* Główne przyciski kalkulatora */}
        <div className="main-buttons">
          <button onClick={() => handleClear()} className="btn clear">C</button>
          <button onClick={() => handleBackspace()} className="btn backspace">←</button>
          <button onClick={() => handleToggleSign()} className="btn operator">+/-</button>
          <button onClick={() => handleClick('+')} className="btn operator">+</button>

          <button onClick={() => handleClick('7')} className="btn number">7</button>
          <button onClick={() => handleClick('8')} className="btn number">8</button>
          <button onClick={() => handleClick('9')} className="btn number">9</button>
          <button onClick={() => handleClick('-')} className="btn operator">-</button>

          <button onClick={() => handleClick('4')} className="btn number">4</button>
          <button onClick={() => handleClick('5')} className="btn number">5</button>
          <button onClick={() => handleClick('6')} className="btn number">6</button>
          <button onClick={() => handleClick('*')} className="btn operator">*</button>

          <button onClick={() => handleClick('1')} className="btn number">1</button>
          <button onClick={() => handleClick('2')} className="btn number">2</button>
          <button onClick={() => handleClick('3')} className="btn number">3</button>
          <button onClick={() => handleClick('/')} className="btn operator">/</button>

          <button onClick={() => handleClick('.')} className="btn number">.</button>
          <button onClick={() => handleClick('0')} className="btn number">0</button>
          <button onClick={handleCalculate} className="btn equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
