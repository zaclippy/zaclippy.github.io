// This file contains functions for making API calls to the NLP cancer diagnosis model.
// It handles requests and responses, ensuring data is fetched and processed correctly.

const API_URL = "https://nlp-cancer.onrender.com/api"; // Update with your actual API endpoint

// Function to classify clinical text
async function classifyText(clinicalText) {
    try {
        const response = await fetch(`${API_URL}/classify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: clinicalText }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Return the classification result
    } catch (error) {
        console.error('Error during classification:', error);
        throw error; // Rethrow the error for further handling
    }
}

// Function to extract named entities (renamed for consistency)
async function extractEntities(clinicalText) {
    try {
        const response = await fetch(`${API_URL}/ner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: clinicalText }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Return the NER results
    } catch (error) {
        console.error('Error during entity extraction:', error);
        throw error; // Rethrow the error for further handling
    }
}

// Function to get demo data from backend
async function getDemoData() {
    try {
        const response = await fetch(`${API_URL}/demo`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching demo data:", error);
        throw error;
    }
}

// Add health check function
async function healthCheck() {
    try {
        const response = await fetch(`${API_URL.replace("/api", "")}/health`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Backend health check failed:", error);
        return { status: "error", message: "Backend unavailable" };
    }
}

// Get fallback English demo cases
function getEnglishDemoData() {
    return {
        demo_cases: [
            {
                id: 'en_case_1',
                title: 'Lung Cancer - High Risk (English Demo)',
                text: "Patient is a 65-year-old male with a history of smoking who presents with persistent cough for 3 months, weight loss of 15 pounds, and chest pain. CT scan shows a 4cm mass in the right upper lobe of the lung with enlarged mediastinal lymph nodes.",
                label: "Cancer Case",
                expectedEntities: ['cough', 'weight loss', 'chest pain', 'mass', 'lung', 'lymph nodes'],
                riskLevel: 'high',
                language: 'English',
                isDemo: true
            },
            {
                id: 'en_case_2',
                title: 'Lymphoma Symptoms (English Demo)',
                text: "45-year-old female presents with fatigue, night sweats, and enlarged lymph nodes in the neck and axilla. CBC shows elevated white blood cell count. Patient reports B symptoms including fever and unexplained weight loss over the past 2 months.",
                label: "Cancer Case",
                expectedEntities: ['fatigue', 'night sweats', 'lymph nodes', 'fever', 'weight loss'],
                riskLevel: 'high',
                language: 'English',
                isDemo: true
            },
            {
                id: 'en_case_3',
                title: 'Routine Screening - Normal (English Demo)',
                text: "Patient with family history of breast cancer presents for routine mammography screening. No current symptoms or palpable masses. Physical examination unremarkable. Mammogram shows scattered fibroglandular densities, no suspicious findings.",
                label: "Non-Cancer",
                expectedEntities: ['breast cancer', 'mammography', 'examination'],
                riskLevel: 'low',
                language: 'English',
                isDemo: true
            },
            {
                id: 'en_case_4',
                title: 'Esophageal Concerns (English Demo)',
                text: "72-year-old male presents with difficulty swallowing, weight loss, and heartburn. Upper endoscopy reveals irregular mucosa in the distal esophagus with biopsy showing dysplastic changes. Patient has history of gastroesophageal reflux disease.",
                label: "Cancer Case",
                expectedEntities: ['difficulty swallowing', 'weight loss', 'heartburn', 'endoscopy', 'biopsy', 'esophagus'],
                riskLevel: 'medium',
                language: 'English',
                isDemo: true
            },
            {
                id: 'en_case_5',
                title: 'Prostate Cancer Screening (English Demo)',
                text: "68-year-old male with elevated PSA levels and family history of prostate cancer. Digital rectal exam reveals enlarged prostate with nodular consistency. Patient reports increased urinary frequency and weak urine stream over past 6 months.",
                label: "Cancer Case",
                expectedEntities: ['PSA', 'prostate cancer', 'prostate', 'urinary frequency', 'urine stream'],
                riskLevel: 'medium',
                language: 'English',
                isDemo: true
            },
            {
                id: 'en_case_6',
                title: 'Skin Lesion Evaluation (English Demo)',
                text: "52-year-old female presents with a pigmented lesion on her back that has changed in size and color over the past 3 months. Dermoscopy shows asymmetric borders and color variation. Patient has history of multiple sunburns and fair skin.",
                label: "Cancer Case",
                expectedEntities: ['pigmented lesion', 'dermoscopy', 'asymmetric borders', 'color variation', 'sunburns'],
                riskLevel: 'high',
                language: 'English',
                isDemo: true
            }
        ]
    };
}

// Export functions for use in other modules
export { classifyText, extractEntities, getDemoData, healthCheck, getEnglishDemoData };