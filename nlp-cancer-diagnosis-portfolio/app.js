// Import API functions
import { classifyText, extractEntities, getDemoData, healthCheck } from './api.js';

class NLPApp {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.loadDemoData();
    }

    initializeElements() {
        // Input elements
        this.clinicalText = document.getElementById('clinical-text');
        this.analyzeBtn = document.getElementById('analyze-btn');
        this.demoBtn = document.getElementById('demo-btn');
        this.clearBtn = document.getElementById('clear-btn');

        // Button states
        this.btnText = this.analyzeBtn.querySelector('.btn-text');
        this.btnLoading = this.analyzeBtn.querySelector('.btn-loading');

        // Results panel
        this.resultsPanel = document.getElementById('results-panel');
        this.closeResultsBtn = document.getElementById('close-results');
        
        // Output elements
        this.classificationOutput = document.getElementById('classification-output');
        this.nerOutput = document.getElementById('ner-output');
        this.confidenceOutput = document.getElementById('confidence-output');

        // Demo data storage
        this.demoTexts = [];
        this.currentDemoIndex = 0;
    }

    bindEvents() {
        this.analyzeBtn.addEventListener('click', () => this.analyzeText());
        this.demoBtn.addEventListener('click', () => this.loadDemoText());
        this.clearBtn.addEventListener('click', () => this.clearText());
        this.closeResultsBtn.addEventListener('click', () => this.closeResults());

        // Close panel when clicking outside
        this.resultsPanel.addEventListener('click', (e) => {
            if (e.target === this.resultsPanel) {
                this.closeResults();
            }
        });

        // Close panel with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.resultsPanel.classList.contains('hidden')) {
                this.closeResults();
            }
        });

        // Auto-resize textarea
        this.clinicalText.addEventListener('input', (e) => {
            e.target.style.height = 'auto';
            e.target.style.height = (e.target.scrollHeight) + 'px';
        });
    }

    async loadDemoData() {
        try {
            const response = await getDemoData();
            if (response.demo_cases && response.demo_cases.length > 0) {
                this.demoTexts = response.demo_cases;
                console.log(`Loaded ${this.demoTexts.length} demo cases from backend`);
                
                // Update demo button text to show available cases
                this.demoBtn.textContent = `Load Demo Text (${this.demoTexts.length} available)`;
            } else {
                console.warn('No demo cases found, using fallback data');
                this.initializeFallbackDemoData();
            }
        } catch (error) {
            console.error('Failed to load demo data from backend:', error);
            this.initializeFallbackDemoData();
        }
    }

    initializeFallbackDemoData() {
        this.demoTexts = [
            {
                filename: 'fallback_cancer.txt',
                text: "Patient is a 65-year-old male with a history of smoking who presents with persistent cough for 3 months, weight loss of 15 pounds, and chest pain. CT scan shows a 4cm mass in the right upper lobe of the lung with enlarged mediastinal lymph nodes.",
                label: "Cancer Case"
            },
            {
                filename: 'fallback_bg.txt',
                text: "45-year-old female presents with fatigue and mild headache. Physical examination unremarkable. Vital signs stable. No concerning findings on initial assessment.",
                label: "Non-Cancer"
            }
        ];
    }

    async analyzeText() {
        const text = this.clinicalText.value.trim();
        
        if (!text) {
            this.showError('Please enter some clinical text to analyze.');
            return;
        }

        this.setLoadingState(true);

        try {
            // Check backend health first
            const health = await healthCheck();
            if (health.status === 'error') {
                throw new Error('Backend service is unavailable');
            }

            // Make parallel API calls
            const [classificationResult, nerResult] = await Promise.all([
                classifyText(text),
                extractEntities(text)
            ]);

            this.displayResults(classificationResult, nerResult, text);
            this.showResults();
        } catch (error) {
            console.error('Analysis error:', error);
            this.showError('An error occurred during analysis. Please check your connection and try again.');
        } finally {
            this.setLoadingState(false);
        }
    }

    displayResults(classification, ner, originalText) {
        // Display classification
        this.displayClassification(classification);
        
        // Display NER results
        this.displayNER(ner, originalText);
        
        // Display confidence
        this.displayConfidence(classification.confidence || 0.85);
    }

    displayClassification(classification) {
        const result = classification.prediction || classification.label || 'Unknown';
        const probability = classification.probability || classification.confidence || 0;
        
        const resultClass = result.toLowerCase().includes('cancer') ? 'high-risk' : 'low-risk';
        
        this.classificationOutput.innerHTML = `
            <div class="classification-result-item ${resultClass}">
                <div class="classification-label">
                    <strong>Prediction:</strong> ${result}
                </div>
                <div class="classification-confidence">
                    <strong>Probability:</strong> ${(probability * 100).toFixed(1)}%
                </div>
                <div class="classification-bar">
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${probability * 100}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    displayNER(nerResults, originalText) {
        if (!nerResults || !nerResults.entities || nerResults.entities.length === 0) {
            this.nerOutput.innerHTML = '<p>No entities detected in the text.</p>';
            return;
        }

        // Create highlighted text
        const highlightedText = this.highlightEntities(originalText, nerResults.entities);
        
        // Create entity list
        const entityList = this.createEntityList(nerResults.entities);

        this.nerOutput.innerHTML = `
            <div class="highlighted-text">
                <h4>Highlighted Text:</h4>
                <div class="text-display">${highlightedText}</div>
            </div>
            <div class="entity-list">
                <h4>Detected Entities (${nerResults.entities.length}):</h4>
                ${entityList}
            </div>
        `;
    }

    highlightEntities(text, entities) {
        let highlightedText = text;
        
        // Sort entities by start position (descending) to avoid position conflicts
        const sortedEntities = [...entities].sort((a, b) => b.start - a.start);
        
        sortedEntities.forEach(entity => {
            const beforeEntity = highlightedText.substring(0, entity.start);
            const entityText = highlightedText.substring(entity.start, entity.end);
            const afterEntity = highlightedText.substring(entity.end);
            
            const labelClass = entity.label.toLowerCase();
            highlightedText = beforeEntity + 
                `<span class="entity ${labelClass}" title="${entity.description || entity.label}">${entityText}</span>` + 
                afterEntity;
        });

        return highlightedText;
    }

    createEntityList(entities) {
        const entityGroups = entities.reduce((groups, entity) => {
            const label = entity.label || 'OTHER';
            if (!groups[label]) groups[label] = [];
            groups[label].push(entity);
            return groups;
        }, {});

        return Object.entries(entityGroups)
            .map(([label, entityList]) => `
                <div class="entity-group">
                    <h5><span class="entity-marker ${label.toLowerCase()}"></span>${label} (${entityList.length})</h5>
                    <ul>
                        ${entityList.map(entity => `
                            <li>
                                <span class="entity ${entity.label.toLowerCase()}">${entity.text}</span>
                                ${entity.description ? `<small> - ${entity.description}</small>` : ''}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('');
    }

    displayConfidence(confidence) {
        const confidencePercent = (confidence * 100).toFixed(1);
        let confidenceLevel = 'High';
        let confidenceClass = 'high';

        if (confidence < 0.7) {
            confidenceLevel = 'Medium';
            confidenceClass = 'medium';
        }
        if (confidence < 0.5) {
            confidenceLevel = 'Low';
            confidenceClass = 'low';
        }

        this.confidenceOutput.innerHTML = `
            <div class="confidence-display ${confidenceClass}">
                <div class="confidence-score">${confidencePercent}%</div>
                <div class="confidence-level">${confidenceLevel} Confidence</div>
                <div class="confidence-description">
                    ${this.getConfidenceDescription(confidence)}
                </div>
            </div>
        `;
    }

    getConfidenceDescription(confidence) {
        if (confidence >= 0.8) {
            return "High confidence in the analysis results. The model is very certain about its predictions.";
        } else if (confidence >= 0.6) {
            return "Moderate confidence. Results should be considered alongside clinical judgment.";
        } else {
            return "Lower confidence. Additional clinical evaluation is strongly recommended.";
        }
    }

    loadDemoText() {
        if (this.demoTexts.length === 0) {
            this.showError('No demo texts available. Please check backend connection.');
            return;
        }

        // Cycle through demo texts
        const demoCase = this.demoTexts[this.currentDemoIndex];
        this.currentDemoIndex = (this.currentDemoIndex + 1) % this.demoTexts.length;

        // Load the demo text
        this.clinicalText.value = demoCase.text;
        this.clinicalText.style.height = 'auto';
        this.clinicalText.style.height = (this.clinicalText.scrollHeight) + 'px';

        // Show info about the loaded case
        this.showInfo(`Loaded: ${demoCase.filename} (${demoCase.label})`);
    }

    clearText() {
        this.clinicalText.value = '';
        this.clinicalText.style.height = 'auto';
        this.closeResults();
    }

    setLoadingState(loading) {
        this.analyzeBtn.disabled = loading;
        
        if (loading) {
            this.btnText.classList.add('hidden');
            this.btnLoading.classList.remove('hidden');
            this.analyzeBtn.classList.add('loading');
        } else {
            this.btnText.classList.remove('hidden');
            this.btnLoading.classList.add('hidden');
            this.analyzeBtn.classList.remove('loading');
        }
    }

    showResults() {
        this.resultsPanel.classList.remove('hidden');
    }

    closeResults() {
        this.resultsPanel.classList.add('hidden');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showInfo(message) {
        this.showNotification(message, 'info');
    }

    showNotification(message, type = 'error') {
        // Create a notification
        const notificationDiv = document.createElement('div');
        notificationDiv.className = `notification ${type}`;
        notificationDiv.textContent = message;
        
        const bgColor = type === 'error' ? 'var(--danger)' : 'var(--primary)';
        notificationDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: var(--shadow);
            z-index: 3000;
            max-width: 300px;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notificationDiv);

        setTimeout(() => {
            notificationDiv.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notificationDiv.remove(), 300);
        }, type === 'error' ? 5000 : 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NLPApp();
});