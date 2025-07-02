// Import API functions
import { classifyText, extractEntities, getDemoData, healthCheck, getEnglishDemoData } from './api.js';

class NLPApp {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.loadDemoData();
        this.apiAvailable = false;
    }

    initializeElements() {
        // Input elements
        this.analyzeBtn = document.getElementById('analyze-btn');
        this.clearBtn = document.getElementById('clear-btn');

        // Demo case selection
        this.demoSelector = document.getElementById('demo-selector');
        this.selectedCaseDisplay = document.getElementById('selected-case-display');

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
        this.selectedCaseIndex = -1;
    }

    bindEvents() {
        this.analyzeBtn.addEventListener('click', () => this.analyzeSelectedCase());
        this.clearBtn.addEventListener('click', () => this.clearSelection());
        this.closeResultsBtn.addEventListener('click', () => this.closeResults());
        this.demoSelector.addEventListener('change', () => this.selectDemoCase());

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
    }

    async loadDemoData() {
        console.log('Loading demo data...');
        
        // Always load English demo cases first
        const englishDemoData = getEnglishDemoData();
        this.demoTexts = [...englishDemoData.demo_cases];
        
        // Try to load Spanish cases from API
        try {
            const health = await healthCheck();
            if (health.status !== 'error') {
                const apiDemoData = await getDemoData();
                if (apiDemoData.demo_cases && apiDemoData.demo_cases.length > 0) {
                    // Mark Spanish cases and add them to the beginning
                    const spanishCases = apiDemoData.demo_cases.map(case_ => ({
                        ...case_,
                        language: 'Spanish',
                        isDemo: false,
                        title: case_.title || 'Spanish Clinical Text'
                    }));
                    
                    this.demoTexts = [...spanishCases, ...this.demoTexts];
                    this.apiAvailable = true;
                    console.log(`Loaded ${spanishCases.length} Spanish cases from API and ${englishDemoData.demo_cases.length} English demo cases`);
                } else {
                    console.warn('No Spanish demo cases found from API');
                }
            } else {
                console.warn('API health check failed, using English demo cases only');
            }
        } catch (error) {
            console.error('Failed to load Spanish demo data from API:', error);
        }
        
        this.populateDemoSelector();
        this.updateStatusMessage();
    }

    populateDemoSelector() {
        // Clear existing options
        this.demoSelector.innerHTML = '<option value="">Select a clinical case...</option>';
        
        // Add demo cases with language indicators
        this.demoTexts.forEach((demoCase, index) => {
            const option = document.createElement('option');
            option.value = index;
            
            // Add language prefix and styling
            const languagePrefix = demoCase.language === 'Spanish' ? '🇪🇸' : '🇬🇧';
            const caseType = demoCase.isDemo ? ' (Demo)' : '';
            option.textContent = `${languagePrefix} ${demoCase.title}${caseType}`;
            
            // Add data attributes for styling
            option.setAttribute('data-language', demoCase.language);
            option.setAttribute('data-is-demo', demoCase.isDemo);
            
            this.demoSelector.appendChild(option);
        });
    }

    updateStatusMessage() {
        const statusElement = document.getElementById('api-status');
        if (statusElement) {
            statusElement.remove();
        }

        const statusDiv = document.createElement('div');
        statusDiv.id = 'api-status';
        statusDiv.className = 'api-status';
        
        if (this.apiAvailable) {
            statusDiv.innerHTML = `
                <div class="status-indicator online">
                    <span class="status-dot"></span>
                    <span>API Online - Spanish clinical cases available</span>
                </div>
            `;
        } else {
            statusDiv.innerHTML = `
                <div class="status-indicator offline">
                    <span class="status-dot"></span>
                    <span>API Offline - English demo cases only</span>
                </div>
            `;
        }

        const demoSection = document.querySelector('.demo-section');
        demoSection.insertBefore(statusDiv, demoSection.querySelector('.demo-selector-container'));
    }

    selectDemoCase() {
        const selectedIndex = parseInt(this.demoSelector.value);
        
        if (isNaN(selectedIndex) || selectedIndex < 0) {
            this.selectedCaseIndex = -1;
            this.selectedCaseDisplay.innerHTML = '<p class="no-case">No case selected</p>';
            this.analyzeBtn.disabled = true;
            return;
        }

        this.selectedCaseIndex = selectedIndex;
        const selectedCase = this.demoTexts[selectedIndex];
        
        this.selectedCaseDisplay.innerHTML = `
            <div class="selected-case">
                <div class="case-header">
                    <h4>${selectedCase.title}</h4>
                    <div class="case-badges">
                        <span class="language-badge ${selectedCase.language.toLowerCase()}">${selectedCase.language}</span>
                        <span class="case-label ${selectedCase.riskLevel}">${selectedCase.label}</span>
                        ${selectedCase.isDemo ? '<span class="demo-badge">Demo</span>' : '<span class="api-badge">API</span>'}
                    </div>
                </div>
                <div class="case-text">
                    <p>${selectedCase.text}</p>
                </div>
                <div class="case-metadata">
                    <small>Expected entities: ${selectedCase.expectedEntities?.join(', ') || 'Various medical terms'}</small>
                </div>
            </div>
        `;
        
        this.analyzeBtn.disabled = false;
        this.closeResults(); // Close any open results
    }

    async analyzeSelectedCase() {
        if (this.selectedCaseIndex === -1) {
            this.showError('Please select a demo case first.');
            return;
        }

        const selectedCase = this.demoTexts[this.selectedCaseIndex];
        this.setLoadingState(true);

        try {
            // Only try API if it's available and this is a Spanish case
            if (this.apiAvailable && selectedCase.language === 'Spanish' && !selectedCase.isDemo) {
                const health = await healthCheck();
                if (health.status !== 'error') {
                    // Make parallel API calls for Spanish cases
                    const [classificationResult, nerResult] = await Promise.all([
                        classifyText(selectedCase.text),
                        extractEntities(selectedCase.text)
                    ]);

                    this.displayResults(classificationResult, nerResult, selectedCase);
                    this.showResults();
                } else {
                    throw new Error('API temporarily unavailable');
                }
            } else {
                // Use mock results for English demo cases
                console.log('Using mock results for English demo case');
                this.displayMockResults(selectedCase);
                this.showResults();
            }
        } catch (error) {
            console.error('Analysis error:', error);
            this.showError(`Analysis failed${selectedCase.language === 'Spanish' ? ' - API may be unavailable' : ''}. Showing expected results.`);
            this.displayMockResults(selectedCase);
            this.showResults();
        } finally {
            this.setLoadingState(false);
        }
    }

    displayResults(classification, ner, selectedCase) {
        // Display classification with case context
        this.displayClassification(classification, selectedCase);
        
        // Display NER results
        this.displayNER(ner, selectedCase.text);
        
        // Display confidence
        this.displayConfidence(classification.confidence || 0.85);
    }

    displayClassification(classification, selectedCase) {
        const result = classification.prediction || classification.label || 'Non-Cancer';
        const probability = classification.probability || classification.confidence || 0;
        
        const resultClass = result.toLowerCase().includes('cancer') ? 'high-risk' : 'low-risk';
        
        this.classificationOutput.innerHTML = `
            <div class="classification-result-item ${resultClass}">
                <div class="case-info">
                    <h4>${selectedCase.title}</h4>
                    <div class="case-badges">
                        <span class="language-badge ${selectedCase.language.toLowerCase()}">${selectedCase.language}</span>
                        <span class="expected-label">Expected: ${selectedCase.label}</span>
                        ${selectedCase.isDemo ? '<span class="demo-badge">Demo Result</span>' : '<span class="api-badge">API Result</span>'}
                    </div>
                </div>
                <div class="classification-label">
                    <strong>Model Prediction:</strong> ${result}
                </div>
                <div class="classification-confidence">
                    <strong>Confidence:</strong> ${(probability * 100).toFixed(1)}%
                </div>
                <div class="classification-bar">
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${probability * 100}%"></div>
                    </div>
                </div>
                <div class="accuracy-indicator">
                    ${this.getAccuracyIndicator(selectedCase.label, result)}
                </div>
            </div>
        `;
    }

    getAccuracyIndicator(expected, predicted) {
        const isCorrect = (expected.toLowerCase().includes('cancer') && predicted.toLowerCase().includes('cancer')) ||
                         (expected.toLowerCase().includes('non') && predicted.toLowerCase().includes('non'));
        
        return isCorrect 
            ? '<span class="accuracy correct">✓ Correct Prediction</span>'
            : '<span class="accuracy incorrect">✗ Prediction Mismatch</span>';
    }

    displayMockResults(selectedCase) {
        // Show expected results when backend is unavailable or for demo cases
        const mockClassification = {
            prediction: selectedCase.label,
            confidence: selectedCase.riskLevel === 'high' ? 0.92 : selectedCase.riskLevel === 'medium' ? 0.78 : 0.85
        };

        const mockNER = {
            entities: selectedCase.expectedEntities?.map((entity, index) => ({
                text: entity,
                label: this.guessEntityType(entity),
                start: selectedCase.text.toLowerCase().indexOf(entity.toLowerCase()),
                end: selectedCase.text.toLowerCase().indexOf(entity.toLowerCase()) + entity.length,
                confidence: 0.8 + Math.random() * 0.2
            })).filter(e => e.start !== -1) || []
        };

        this.displayResults(mockClassification, mockNER, selectedCase);
    }

    guessEntityType(entity) {
        const symptoms = ['cough', 'pain', 'fatigue', 'fever', 'sweats', 'weight loss', 'heartburn', 'urinary frequency', 'urine stream'];
        const anatomy = ['lung', 'lymph nodes', 'neck', 'axilla', 'breast', 'esophagus', 'prostate', 'skin'];
        const procedures = ['CT scan', 'mammography', 'endoscopy', 'biopsy', 'examination', 'PSA', 'dermoscopy'];
        
        const lowerEntity = entity.toLowerCase();
        if (symptoms.some(s => lowerEntity.includes(s))) return 'SYMPTOM';
        if (anatomy.some(a => lowerEntity.includes(a))) return 'ANATOMY';
        if (procedures.some(p => lowerEntity.includes(p))) return 'TREATMENT';
        return 'CONDITION';
    }

    displayNER(nerResults, originalText) {
        if (!nerResults || !nerResults.entities || nerResults.entities.length === 0) {
            this.nerOutput.innerHTML = '<p>No entities detected in the text.</p>';
            return;
        }

        const entityList = this.createEntityList(nerResults.entities);

        this.nerOutput.innerHTML = `
            <div class="entity-list">
                <h4>Detected Entities (${nerResults.entities.length}):</h4>
                ${entityList}
            </div>
        `;
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
                                ${entity.confidence ? `<small class="confidence">(${(entity.confidence * 100).toFixed(0)}%)</small>` : ''}
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

    clearSelection() {
        this.demoSelector.value = '';
        this.selectedCaseIndex = -1;
        this.selectedCaseDisplay.innerHTML = '<p class="no-case">No case selected</p>';
        this.analyzeBtn.disabled = true;
        this.closeResults();
    }

    setLoadingState(loading) {
        this.analyzeBtn.disabled = loading || this.selectedCaseIndex === -1;
        
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

    showNotification(message, type = 'error') {
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