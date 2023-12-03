import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: string) => {
    if (!operator) {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    let result = '';
    switch (operator) {
      case '+':
        result = (Number(firstNumber) + Number(secondNumber)).toString();
        break;
      case '-':
        result = (Number(firstNumber) - Number(secondNumber)).toString();
        break;
      case '*':
        result = (Number(firstNumber) * Number(secondNumber)).toString();
        break;
      case '/':
        result = (Number(firstNumber) / Number(secondNumber)).toString();
        break;
      default:
        break;
    }
    setResult(result);
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setResult('');
  };

  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <div className="space-x-4 flex">
        <input
          type="text"
          value={firstNumber}
          readOnly
          className="p-2 border-2 border-gray-300 rounded-md"
        />
        <div>{operator}</div>
        <input
          type="text"
          value={secondNumber}
          readOnly
          className="p-2 border-2 border-gray-300 rounded-md"
        />
      </div>
      <div className="space-x-4 flex">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className="p-2 text-white bg-blue-500 rounded-md"
          >
            {number}
          </button>
        ))}
      </div>
      <div className="space-x-4 flex">
        {['+', '-', '*', '/'].map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperatorClick(operator)}
            className="p-2 text-white bg-green-500 rounded-md"
          >
            {operator}
          </button>
        ))}
      </div>
      <div className="space-x-4 flex">
        <button onClick={calculate} className="p-2 text-white bg-yellow-500 rounded-md">
          =
        </button>
        <button onClick={clear} className="p-2 text-white bg-red-500 rounded-md">
          Clear
        </button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;