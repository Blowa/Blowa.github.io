// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrophyIcon } from '@heroicons/react/24/outline'; // Icons
import { FaSteam } from 'react-icons/fa';

interface Project {
    name: string;
    description: string;
    youtubeVideoId: string;
    googlePlayLink?: string;
    appleAppStoreLink?: string;
    itchIoLink?: string;
    steamLink?: string;
    isGameJamWinner?: boolean;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden"> {/* Card container */}
            <div className="aspect-w-16 aspect-h-9"> {/* Aspect ratio container for video */}
                <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                    title={`${project.name} Demo Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full" // Make iframe fill container
                />
            </div>
            <div className="p-6"> {/* Card content padding */}
                <div className="flex items-center justify-between mb-4"> {/* Title and Trophy */}
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                    {project.isGameJamWinner && (
                        <TrophyIcon className="h-6 w-6 text-yellow-500" aria-label="Game Jam Winner" />
                    )}
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2"> {/* Platform Links */}
                    {project.googlePlayLink && (
                        <Link href={project.googlePlayLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <Image src="/img/google_play_badge.png" alt="Google Play" width={180} height={60} className="hover:opacity-80" /> {/* Google Play Badge */}
                        </Link>
                    )}
                    {project.appleAppStoreLink && (
                        <Link href={project.appleAppStoreLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:opacity-80">
                            <Image src="/img/app_store_badge.svg" alt="App Store" width={160} height={60} className="mr-2" /> {/* App Store Badge */}
                        </Link>
                    )}
                    {project.itchIoLink && (
                        <Link href={project.itchIoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-bold text-white bg-[#FA5C5C] hover:bg-[#FF8C8C] font-lato">
                        Play on itch.io
                    </Link>
                    )}
                    {project.steamLink && (
                        <Link href={project.steamLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-gray-700 hover:opacity-70 transform scale-160 px-8">
                            <FaSteam className="mr-2"/> Steam Store
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
