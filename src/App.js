// noinspection JSValidateTypes

import React, { useState } from 'react';
import logo from './logo1.png';
import './App.css';

const paperTypes = [
  {
    name: "TEXTS",
    details: [
      {
        type: "Matte",
        weights: [
          { value: 100, pricePerUnit: 0.562 },
          { value: 80, pricePerUnit: 0.437 },
          { value: 70, pricePerUnit: 0.406 },
          //{ value: 60, pricePerUnit: 0.502 },
        ],
      },
      {
        type: "Gloss",
        weights: [
          { value: 100, pricePerUnit: 0.500 },
          { value: 80, pricePerUnit: 0.375 },
          { value: 70, pricePerUnit: 0.343 },
          { value: 60, pricePerUnit: 0.312 },
        ],
      },
    ],
  },
  {
    name: "OFFSET",
    details: [
      {
        type: "standard",
        weights: [
          { value: 100, pricePerUnit: 0.812 },
          { value: 80, pricePerUnit: 0.625 },
          { value: 70, pricePerUnit: 0.562 },
          { value: 60, pricePerUnit: 0.450},
          { value: 50, pricePerUnit: 0.413 },
        ],
      },
      /*{
        type: "Gloss",
        weights: [
          { value: 100, pricePerUnit: 0.500 },
          { value: 80, pricePerUnit: 0.375 },
          { value: 70, pricePerUnit: 0.343 },
          { value: 60, pricePerUnit: 0.312 },
        ],
      },*/
    ],
  },
  {
    name: "COVERS",
    details: [
      {
        type: "Matte",
        weights: [
          { value: 100, pricePerUnit: 1.125 },
          { value: 80, pricePerUnit: 0.937 },
          /* { value: 70, pricePerUnit: 0.406 },
           { value: 60, pricePerUnit: 0.502 },*/
        ],
      },
      {
        type: "Gloss",
        weights: [
          { value: 100, pricePerUnit: 1.000 },
          { value: 80, pricePerUnit: 0.812 },
          /*{ value: 70, pricePerUnit: 0.343 },
          { value: 60, pricePerUnit: 0.312 },*/
        ],
      },
    ],
  },
  {
    name: "COUGAR/LYNX",
    details: [
      {
        type: "Cover",
        weights: [
          { value: 100, pricePerUnit: 1.437 },
          { value: 80, pricePerUnit: 1.125 },
          /* { value: 70, pricePerUnit: 0.406 },
           { value: 60, pricePerUnit: 0.502 },*/
        ],
      },
      /*{
        type: "Gloss",
        weights: [
          { value: 100, pricePerUnit: 1.000 },
          { value: 80, pricePerUnit: 0.812 },
          { value: 70, pricePerUnit: 0.343 },
          { value: 60, pricePerUnit: 0.312 },
        ],
      },*/
    ],
  },
  {
    name: "BONDS",
    details: [
      {
        type: "standard",
        weights: [
          { value: 24, pricePerUnit: 0.500 },
          { value: 20, pricePerUnit: 0.437 },
          /*{ value: 70, pricePerUnit: 0.562 },
          { value: 60, pricePerUnit: 0.500 },
          { value: 50, pricePerUnit: 0.413 },*/
        ],
      },
      /* {
         type: "Gloss",
         weights: [
           { value: 100, pricePerUnit: 0.500 },
           { value: 80, pricePerUnit: 0.375 },
           { value: 70, pricePerUnit: 0.343 },
           { value: 60, pricePerUnit: 0.312 },
         ],
       },*/
    ],
  },
  {
    name: "CAROLINA",
    details: [
      {
        type: "C1S",
        weights: [
          { value: 18, pricePerUnit: 1.850 },
          { value: 15, pricePerUnit: 1.450 },
          { value: 12, pricePerUnit: 1.250 },
          { value: 10, pricePerUnit: 0.937 },
          { value: 8, pricePerUnit: 0.875 },
        ],
      },
      {
        type: "C2S",
        weights: [
          { value: 14, pricePerUnit: 1.468 },
          { value: 10, pricePerUnit: 1.000 },
        ],
      },
    ],
  },
  {
    name: "REPLY CARD",
    details: [
      {
        type: "standard",
        weights: [
          { value: 7, pricePerUnit: 0.750 },
          /* { value: 20, pricePerUnit: 0.437 },
           { value: 70, pricePerUnit: 0.562 },
           { value: 60, pricePerUnit: 0.500 },
           { value: 50, pricePerUnit: 0.413 },
         ],
       },
       {
         type: "Gloss",
         weights: [
           { value: 100, pricePerUnit: 0.500 },
           { value: 80, pricePerUnit: 0.375 },
           { value: 70, pricePerUnit: 0.343 },
           { value: 60, pricePerUnit: 0.312 },*/
        ],
      },
    ],
  },
  // Додай інші типи паперу та їх характеристики тут
];

function App() {
  const [selectedPaper, setSelectedPaper] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [requiredSheets, setRequiredSheets] = useState('');
  const [yieldPerStartSize, setYieldPerStartSize] = useState('');
  const [resultInches, setResultInches] = useState('');

  const availableTypes = selectedPaper ? paperTypes.find(paper => paper.name === selectedPaper)?.details || [] : [];
  let availableWeights = [];
  const selectedTypeDetails = availableTypes.find(detail => detail.type === selectedType);
  if (selectedTypeDetails) {
    availableWeights = selectedTypeDetails.weights;
  }

  const calculateResult = () => {
    const weightDetail = selectedTypeDetails?.weights.find(weight => weight.value === parseInt(selectedWeight));
    if (!weightDetail || !requiredSheets || !yieldPerStartSize) return;

    const result = (parseInt(requiredSheets) / parseInt(yieldPerStartSize)) * weightDetail.pricePerUnit / 100;
    setResultInches(result.toFixed(3));
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <select value={selectedPaper} onChange={e => setSelectedPaper(e.target.value)}>
            <option value="">Name of the paper</option>
            {paperTypes.map(paper => (
                <option key={paper.name} value={paper.name}>{paper.name}</option>
            ))}
          </select>

          <select value={selectedType} onChange={e => setSelectedType(e.target.value)} disabled={!selectedPaper}>
            <option value="">Type of paper</option>
            {availableTypes.map(detail => (
                <option key={detail.type} value={detail.type}>{detail.type}</option>
            ))}
          </select>

          <select value={selectedWeight} onChange={e => setSelectedWeight(e.target.value)} disabled={!selectedType}>
            <option value="">Weight of the paper</option>
            {availableWeights.map(weight => (
                <option key={weight.value} value={weight.value}>{weight.value}</option>
            ))}
          </select>

          <input
              type="number"
              value={requiredSheets}
              onChange={e => setRequiredSheets(e.target.value)}
              placeholder="Required number of sheets"
          />

          <input
              type="number"
              value={yieldPerStartSize}
              onChange={e => setYieldPerStartSize(e.target.value)}
              placeholder="Yield per start size"
          />

          <button onClick={calculateResult}>Calculate</button>

          <div>Caliper inches: {resultInches}</div>
        </header>
      </div>
  );
}

export default App;
