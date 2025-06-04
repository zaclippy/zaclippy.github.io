# NLP Cancer Diagnosis Portfolio

This project showcases an NLP-based cancer diagnosis model integrated into a web application. The application allows users to input clinical text, visualize named entity recognition results, and receive cancer classification predictions.

## Project Structure

```
nlp-cancer-diagnosis-portfolio
├── src
│   ├── js
│   │   ├── app.js               # Main entry point for the JavaScript application
│   │   ├── api.js               # Functions for making API calls to the NLP model
│   │   └── components
│   │       ├── classifier.js     # Implements cancer classification logic
│   │       ├── ner-visualizer.js # Visualizes named entity recognition results
│   │       └── demo.js           # Provides demo functionality
│   ├── css
│   │   ├── styles.css            # Global styles for the application
│   │   └── components
│   │       ├── dashboard.css      # Styles specific to the dashboard component
│   │       └── demo.css           # Styles specific to the demo component
│   └── assets
│       └── images                # Image assets used throughout the application
├── public
│   ├── index.html                # Main HTML file for the web application
│   ├── demo.html                 # Page for demonstrating NLP cancer diagnosis features
│   └── about.html                # Information about the project and technologies used
├── data
│   ├── sample-annotations.json    # Sample annotations for testing or demonstration
│   └── demo-cases.json            # Demo cases showcasing application functionality
├── package.json                   # Configuration file for npm
└── README.md                      # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd nlp-cancer-diagnosis-portfolio
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   You can use a local server to serve the `public` directory. For example, you can use `live-server` or any other static server.

4. **Access the application**:
   Open your web browser and navigate to `http://localhost:PORT` (replace `PORT` with the port number your server is running on).

## Usage Guidelines

- **Input Clinical Text**: Navigate to the demo page to input clinical text for analysis.
- **View Predictions**: After submitting the text, view the classification results and visualized named entities.
- **Explore Demo Cases**: Check the demo cases for example inputs and expected outputs.

## Technologies Used

- **JavaScript**: For the frontend logic and API interactions.
- **HTML/CSS**: For structuring and styling the web application.
- **NLP Model**: Integrated NLP model for cancer diagnosis and named entity recognition.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.