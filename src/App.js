import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(''); 
  const [fromCurrency, setFromCurrency] = useState('USD'); 
  const [toCurrency, setToCurrency] = useState('EUR'); 
  const [result, setResult] = useState(null); 
  const [rates, setRates] = useState({}); 

  const API_KEY = '66468ce98f61b9e2b49460c6c6a07a01';
  const API_URL = `https://open.er-api.com/v6/latest/${fromCurrency}`;


  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRates(data.rates); 
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchRates();
  }, [fromCurrency]); 

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount');
      return;
    }

    const rate = rates[toCurrency]; 
    if (rate) {
      setResult((amount * rate).toFixed(2)); 
    } else {
      alert('Unable to fetch rate for the selected currencies.');
    }
  };

  return (
    <div className="converter-container">
      <div className="converter">
        <h1 className="converter-container__title">Currency Converter</h1>

        <select
          className="converter__select"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="GBP">GBP</option>
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="converter__input"
        />

        <div className="converter__result">
          {result !== null && (
            <p>
              Result: {result} {toCurrency}
            </p>
          )}
        </div>

        <select
          className="converter__select"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="GBP">GBP</option>
        </select>

        <button onClick={handleConvert} className="converter__button">
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;