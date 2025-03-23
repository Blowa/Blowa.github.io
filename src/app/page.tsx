'use client';

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ModuleList from './components/ModuleList';
import HeroSection from './components/HeroSection';
import { GameModule } from '@/app/types/module';

const gameModules: GameModule[] = [
    {
        name: 'Maze procedural generation',
        htmlPath: '/modules/maze.html',
        thumbnailSrc: '/thumbnails/600x400.webp',
        description: 'Create your own maze! Draw obstacles and watch it generate a maze in real-time. (Text to change but good idea.)'
    },
    {
        name: 'Npc state machine',
        htmlPath: '/modules/npc.html',
        thumbnailSrc: '/thumbnails/600x400.webp',
        description: 'Npc state machine example. Use the player to affect the npc state and see it in action.'
    },
    {
        name: 'Procedural City Gen',
        htmlPath: '/modules/procedural_city.html',
        thumbnailSrc: '/thumbnails/600x400.webp',
        description: 'Witness procedural city generation. Adjust parameters and create unique urban landscapes in real-time.'
    },
    {
        name: 'Placeholder',
        htmlPath: '/modules/procedural_city.html',
        thumbnailSrc: '/thumbnails/600x400.webp',
        description: 'Placeholder description for the module'
    },
    {
        name: 'Placeholder',
        htmlPath: '/modules/procedural_city.html',
        thumbnailSrc: '/thumbnails/600x400.webp',
        description: 'Placeholder description for the module'
    },
    {
        name: 'Placeholder',
        htmlPath: '/modules/procedural_city.html',
        thumbnailSrc: '/thumbnails/600x400.webp',
        description: 'Placeholder description for the module'
    },
];

export default function HomePage() {
    const [currentModuleIndex, setCurrentModuleIndex] = useState<number | null>(null);
    const [isCanvasExpanded, setIsCanvasExpanded] = useState(false);
    const currentModule = currentModuleIndex !== null ? gameModules[currentModuleIndex] : null;

    const handleLaunchModule = (index: number) => {
        setCurrentModuleIndex(index);
        setIsCanvasExpanded(true);
    };

    const handleCloseCanvas = () => {
        setIsCanvasExpanded(false);
        setCurrentModuleIndex(null);
    };

    return (
        <div>
            <Navigation activeSection="Modules" />
            <main className="container mx-auto px-4 py-12">
                <HeroSection
                    title="Interactive Gameplay Demos"
                    description="Click on a demo below to explore interactive examples of my gameplay programming skills. These modules showcase pathfinding, procedural generation, and more,"
                    isCanvasExpanded={isCanvasExpanded}
                    currentModule={currentModule}
                    onCloseCanvas={handleCloseCanvas}
                />

                <ModuleList modules={gameModules} onLaunch={handleLaunchModule} />
            </main>
            <Footer />
        </div>
    );
}
