import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/add', { num1, num2 });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Add Two Numbers</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="input-field"
          />
        </div>
        <button onClick={handleAdd} className="calculate-button">
          Add Numbers
        </button>
        {result !== null && <p className="result">Result: {result}</p>}
      </div>
    </div>
  );
}

export default App;

