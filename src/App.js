import React from 'react';

function App() {
  return (
    <div className = "converter-container">
      <div className = "converter">
      <h1 className = "converter-container__title">Currency Converter</h1>
        <select className = "converter__select">
          <option value = "USD">USD</option>
          <option value = "EUR">EUR</option>
          <option value = "RUB">RUB</option>
          <option value = "GBP">GBP</option>
          </select>
        <input type = "number" className = "converter__input_2" />
        <input type = "number" className = "converter__input" />
        <select className = "converter__select_2">
          <option value = "USD">USD</option>
          <option value = "EUR">EUR</option>
          <option value = "RUB">RUB</option>
          <option value = "GBP">GBP</option>
          </select>
      </div>
    </div>
  );
}

export default App;