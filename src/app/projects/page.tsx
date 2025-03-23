// pages/modules.tsx (or pages/projects.tsx)
import React from 'react';
import ProjectCard from '@/app/components/ProjectCard'; // We'll create this component next
import Footer from '@/app/components/Footer';

const ProjectsPage: React.FC = () => {
    const projects = [
        {
            name: "Moneygun Run!",
            description: "A mobile game that achieved over 5 million downloads. Developed gameplay mechanics, UI/UX, and optimized performance for wide device compatibility.",
            youtubeVideoId: "Sjc-CcCoVO0", // Replace with actual YouTube Video ID
            googlePlayLink: "https://play.google.com/store/apps/details?id=com.JuicyFrog.MoneygunRun&hl=en",   // Replace with actual Google Play Link
            appleAppStoreLink: "https://apps.apple.com/us/app/moneygun-run/id1611032629", // Replace with actual Apple App Store Link
        },
        {
            name: "Award-Winning Game Jam: TT",
            description: "TT has been developed within 48 hours for a game jam, which won first place. Focused on innovative gameplay and rapid prototyping.",
            youtubeVideoId: "6YTVCKQ0e6E", // Replace with actual YouTube Video ID
            itchIoLink: "https://itch.io/jam/pot-au-jeu-2/rate/425808",           // Replace with actual Itch.io Link
            isGameJamWinner: true,
        },
        {
            name: "Word Royal",
            description: "A puzzle adventure game designed for mobile platforms. Implemented challenging puzzles, intuitive touch controls, and engaging storyline.",
            youtubeVideoId: "D_It8Y1UQt8", // Replace with actual YouTube Video ID
            googlePlayLink: "https://play.google.com/store/apps/details?id=com.JuicyFrog.WordRoyal",   // Replace with actual Google Play Link
        },
        {
            name: "Dangerous Blaster",
            description: "A twin-stick shooter title released on Steam. Focused on combat mechanics, level design, and integrating Steam features.",
            youtubeVideoId: "ULmHNyyyFFQ", // Replace with actual YouTube Video ID
            steamLink: "https://store.steampowered.com/app/1177460/Dangerous_Blaster",             // Replace with actual Steam Link
        },
    ];

    return (
        <div className="bg-background text-foreground py-12"> {/* Light background for the page */}
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h1> {/* Page Title */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"> {/* Project Grid */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
