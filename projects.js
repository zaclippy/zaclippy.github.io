document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "NLP in Healthcare",
            desc: "Exploring prompt engineering and LLMs to extract clinical insights from medical text. Built tools for healthcare NLP research.",
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
            links: [{ label: "Live", url: "https://brorun.vercel.app" }],
        },
        {
            title: "BroZone: Social Network App",
            desc: "A modern social network for friends to share updates, photos, and events. Built with Next.js and Firebase.",
            tags: ["Web App", "Next.js", "Firebase", "Social"],
            links: [{ label: "Live", url: "https://brozone.vercel.app" }],
        },
        {
            title: "Software Engineering Project Tracker",
            desc: "A web app to manage and track software engineering projects, tasks, and team progress. Built with React and Firebase.",
            tags: ["Web App", "React", "Flask", "REST API"],
            links: [
                {
                    label: "Live",
                    url: "https://softeng-project-tracker.vercel.app",
                },
            ],
        },
        {
            title: "Travel Map Showcase",
            desc: "Interactive map to showcase my travels, with photos and stories appearing on hover. Built with Mapbox and vanilla JS.",
            tags: ["Web App", "Mapbox", "JavaScript", "Travel"],
            links: [{ label: "Demo", url: "travel/index.html" }],
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