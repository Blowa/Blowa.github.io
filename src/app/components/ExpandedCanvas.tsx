import React, { useRef, useState } from 'react';
import GameCanvas from './game_canvas';
import { GameModule } from '@/app/types/module';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ExpandedCanvasProps {
    module: GameModule;
    onClose: () => void;
}

const ExpandedCanvas: React.FC<ExpandedCanvasProps> = ({ module, onClose }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [showCodeSnippet, setShowCodeSnippet] = useState(false);

    const handleReset = () => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow?.location.reload();
        }
    };

    const handleToggleCodeSnippet = () => {
        setShowCodeSnippet(!showCodeSnippet);
    };

    const codeSnippetContent = `
    // Example C++ code snippet (placeholder for now)
    #include <iostream>
    #include <fmt/core.h>

    int main() {
        fmt::print("Some code\n");
    }
    `;

    return (
        <div className="flex overflow-hidden shadow-xl bg-white h-full w-full relative max-h-none max-w-none"> {/* Removed bg-white and shadow-xl, added h-full w-full, removed max-h and max-w restrictions */}
            <div className="flex-grow overflow-hidden relative max-h-full"> {/* Changed max-h to max-h-full */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-200/80 hover:bg-gray-300 rounded-md p-2 cursor-pointer transition-colors duration-200"
                    aria-label="Close"
                >
                    <XMarkIcon className="h-5 w-5 text-gray-700" />
                </button>
                <GameCanvas
                    iframeSrc={module.htmlPath}
                    placeholderMessage="Module will load here..."
                    iframeRef={iframeRef}
                />
            </div>
            <aside className="flex-1 p-8 bg-gray-50 border-l border-gray-200 flex flex-col overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{module.name}</h2>
                {!showCodeSnippet ? (
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                ) : (
                    <div className="bg-gray-100 border border-gray-200 rounded-md p-4 mb-6 overflow-x-auto">
                        <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap">
                            <code>{codeSnippetContent}</code>
                        </pre>
                    </div>
                )}

                <div className="flex flex-col space-y-3">
                    <button className="px-5 py-3 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-medium cursor-pointer transition-colors duration-200 text-center" onClick={handleReset}>Reset</button>
                    <button
                        className="px-5 py-3 rounded-md bg-gray-500 hover:bg-gray-600 text-white font-medium cursor-pointer transition-colors duration-200 text-center"
                        onClick={handleToggleCodeSnippet}
                    >
                        {showCodeSnippet ? 'View Explanation' : 'View Code Snippet'}
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default ExpandedCanvas;
