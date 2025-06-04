// This file serves as the main entry point for the JavaScript application.
// It initializes the application, sets up event listeners, and manages the overall application flow.

import { fetchPrediction } from './api.js';
import { visualizeNER } from './components/ner-visualizer.js';
import { Classifier } from './components/classifier.js';
import { Demo } from './components/demo.js';

const classifier = new Classifier();
const demo = new Demo();

document.addEventListener('DOMContentLoaded', () => {
    const classifyButton = document.getElementById('classify-button');
    const demoButton = document.getElementById('demo-button');

    classifyButton.addEventListener('click', handleClassification);
    demoButton.addEventListener('click', demo.showDemo);
});

async function handleClassification() {
    const inputText = document.getElementById('input-text').value;
    const prediction = await fetchPrediction(inputText);
    
    if (prediction) {
        visualizeNER(prediction.nerResults);
        displayPrediction(prediction.classification);
    } else {
        alert('Error fetching prediction. Please try again.');
    }
}

function displayPrediction(classification) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `Prediction: ${classification}`;
}