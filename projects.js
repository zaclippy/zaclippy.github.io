document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Final Year Project: NLP in Healthcare",
            desc: "Final Year Project<br>Using NLP and LLMs to extract clinical information from medical text. <br>Part of my dissertation paper researching the use of NLP in healthcare.",
            tags: ["AI", "NLP", "LLM", "OpenAI API", "Spacy", "Python"],
            links: [
                {
                    label: "GitHub",
                    url: "https://github.com/zaclippy/healthcare-nlp",
                },
            ],
        },
        {
            title: "BroRun: Strava Run Rating App",
            desc: "A social app to rate and share running routes, integrated with Strava API. Built for runners to discover and review routes.",
            tags: ["Web App", "Strava API", "React", "Fitness"],
            links: [{ label: "Work in Progress" , url:"../#" }],
        },
        {
            title: "BroZone",
            desc: "Social Networking App made with a friend to replace the addictive nature of social media with a more positive experience",
            tags: ["Web App", "Next.js", "Firebase", "Social"],
            links: [{ label: "Live", url: "https://brozone.vercel.app" }],
        },
        {
            title: "Software Engineering Project Tracker",
            desc: "University Group Project\nA web app to track software engineering projects, tasks, and team progress to see if a project will fail or not.",
            tags: ["Web App", "React", "Flask", "REST API"],
            links: [
                {
                    label: "Error",
                    url: "https://softeng-project-tracker.vercel.app",
                },
            ],
        },
        {
            title: "Travel Map",
            desc: "Interactive map to show where I have explored, with a photo",
            tags: [],
            links: [{ label: "Open", url: "travel/index.html" }],
        },
        {
            title: "Haskell Poker Parser",
            desc: "Parser for Texas Hold'em poker hands in Haskell",
            tags: ["Functional Programming", "Haskell", "Game"],
            links: [
                {
                    label: "Github",
                    url: "https://github.com/zaclippy/cswk-program",
                },
            ],
        },
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
            <div class="project-title">${project.title}</div>
            <div class="project-desc">${project.desc}</div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.map(link => `<a class="project-link" href="${link.url}" target="_blank">${link.label}</a>`).join('')}
            </div>
        `;
        projectsList.appendChild(card);
    });
});