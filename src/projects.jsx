import './projects.css'

function Projects({ title }) {
    const projectList = [
        {
            name: "Discord Clone",
            description: "Developed a full-stack Discord replica with React, TypeScript, and Convex backend. Features include real-time chat, WebRTC voice/video calls, and a responsive UI built with Tailwind. Achieved 95% feature parity and sub-100ms latency for core actions.",
            link: "https://github.com/jalejandro23/Discord-Clone-chatstarter-"
        },
        {
            name: "TravelScheduler 201",
            description: "Built a C++ application that visualizes Northwestern’s OpenStreetMap data using the Google Maps API. Integrated real-time CTA Bus Tracker data to simulate transit schedules in the Evanston area. Handled 100MB+ data efficiently with local file storage and Git LFS.",
            link: "https://github.com/jalejandro23/CTA-TravelScheduler201"
        },
        {
            name: "Realtime Image Diffusion",
            description: "Built a full-stack real-time image generation app using a custom Python backend and a React + Tailwind frontend. On the frontend, I designed a responsive UI for user prompts and live image rendering. The backend uses FastAPI with Hugging Face Diffusers for image synthesis, handling tokenization, model inference, and async rendering via WebSockets. Dockerized for deployment, the platform delivers high-quality AI-generated images with low latency.",
            link: "https://github.com/jalejandro23/Realtime-Image-Diffusion-Frontend"
        }
    ];

    return (
        <div className="projects-page">
            <h1>{title}</h1>
            <div className="project-grid">
                {projectList.map((project, index) => (
                    <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;
