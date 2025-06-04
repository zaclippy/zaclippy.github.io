// This file provides demo functionality, showcasing how the application works. 
// It includes sample texts and demonstrates the classification and visualization features.

import { classifyText } from '../classifier.js';
import { visualizeNER } from '../ner-visualizer.js';

document.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.getElementById('run-demo');
    const outputContainer = document.getElementById('output');
    const sampleText = "Mujer de 46 años con enfermedad de Graves-Basedow tratada con I131.";

    demoButton.addEventListener('click', async () => {
        outputContainer.innerHTML = 'Processing...';
        
        // Classify the sample text
        const classificationResult = await classifyText(sampleText);
        
        // Visualize NER results
        const nerResults = await visualizeNER(sampleText);
        
        // Display results
        outputContainer.innerHTML = `
            <h3>Classification Result:</h3>
            <p>${classificationResult}</p>
            <h3>NER Results:</h3>
            <div>${nerResults}</div>
        `;
    });
});