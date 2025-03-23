import React from 'react';
import ExpandedCanvas from './ExpandedCanvas';
import { GameModule } from '@/app/types/module';

interface HeroSectionProps {
    title: string;
    description: string;
    isCanvasExpanded: boolean;
    currentModule: GameModule | null;
    onCloseCanvas: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, isCanvasExpanded, currentModule, onCloseCanvas}) => {
    return (
        <section className={`bg-gradient-to-br from-gray-100 to-white rounded-lg shadow-lg overflow-hidden mb-8 ${isCanvasExpanded ? '' : 'py-20'}`}> {/* Conditional py-20 for text padding */}
            {isCanvasExpanded && currentModule ? (
                <ExpandedCanvas module={currentModule} onClose={onCloseCanvas} />
            ) : (
                <div className="container mx-auto px-6 text-center"> {/* Container for text, remove py-20 here */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
