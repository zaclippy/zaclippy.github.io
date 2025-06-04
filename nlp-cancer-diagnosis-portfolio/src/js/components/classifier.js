class Classifier {
    constructor(api) {
        this.api = api;
    }

    async classifyText(clinicalText) {
        try {
            const response = await this.api.sendTextForClassification(clinicalText);
            return response.data; // Assuming the API returns the classification result in the data field
        } catch (error) {
            console.error("Error classifying text:", error);
            throw error; // Rethrow the error for further handling
        }
    }
}

export default Classifier;