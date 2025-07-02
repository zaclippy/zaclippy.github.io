// This file contains functions for making API calls to the NLP cancer diagnosis model.
// It handles requests and responses, ensuring data is fetched and processed correctly.

const API_URL =
    "https://nlp-cancer.onrender.com/api"; // Update with your actual API endpoint

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

// Export functions for use in other modules
export { classifyText, extractEntities, getDemoData, healthCheck };