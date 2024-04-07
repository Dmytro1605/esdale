// noinspection JSValidateTypes

import React, { useState } from 'react';
import logo from './logo1.png';
import './App.css';
import paperTypes from "./constants/paperTypes";
import {calculateResult} from "./hook";


function App() {
  const [selectedPaper, setSelectedPaper] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [requiredSheets, setRequiredSheets] = useState('');
  const [startWidth, setStartWidth] = useState('');
  const [finishWidth, setFinishWidth] = useState('');
  const [startLength, setStartLength] = useState('');
  const [finishLength, setFinishLength] = useState('');
  const [resultInches, setResultInches] = useState('');


  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo1"/>
          <select value={selectedPaper} onChange={e => setSelectedPaper(e.target.value)}>
            <option value="">Name of the paper</option>
            {paperTypes.map(paper => (
                <option key={paper.name} value={paper.name}>{paper.name}</option>
            ))}
          </select>

          <select value={selectedType} onChange={e => setSelectedType(e.target.value)} disabled={!selectedPaper}>
            <option value="">Type of paper</option>
            {selectedPaper && paperTypes.find(paper => paper.name === selectedPaper)?.details.map(detail => (
                <option key={detail.type} value={detail.type}>{detail.type}</option>
            ))}
          </select>

          <select value={selectedWeight} onChange={e => setSelectedWeight(e.target.value)} disabled={!selectedType}>
            <option value="">Weight of the paper</option>
            {selectedType && paperTypes.find(paper => paper.name === selectedPaper)?.details.find(detail => detail.type === selectedType)?.weights.map(weight => (
                <option key={weight.value} value={weight.value}>{weight.value}</option>
            ))}
          </select>

          <input type="number" value={startWidth} onChange={e => setStartWidth(e.target.value)}
                 placeholder="Start Width (inches)"/>
          <input type="number" value={startLength} onChange={e => setStartLength(e.target.value)}
                 placeholder="Start Length (inches)"/>
          <input type="number" value={finishWidth} onChange={e => setFinishWidth(e.target.value)}
                 placeholder="Finish Width (inches)"/>
          <input type="number" value={finishLength} onChange={e => setFinishLength(e.target.value)}
                 placeholder="Finish Length (inches)"/>
          <input type="number" value={requiredSheets} onChange={e => setRequiredSheets(e.target.value)}
                 placeholder="Required number of sheets"/>

          <button onClick={calculateResult.bind(this, setResultInches, selectedPaper, selectedType, selectedWeight, startWidth, finishWidth, startLength, finishLength,
              requiredSheets)}>Calculate</button>
          <div>{resultInches}</div>
        </header>
      </div>
  );
}

export default App;