// This file contains functions for making API calls to the NLP cancer diagnosis model.
// It handles requests and responses, ensuring data is fetched and processed correctly.

const API_URL = 'http://localhost:5000/api'; // Update with your actual API endpoint

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

// Function to visualize named entities
async function visualizeEntities(clinicalText) {
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
        console.error('Error during entity visualization:', error);
        throw error; // Rethrow the error for further handling
    }
}