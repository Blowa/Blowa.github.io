'use client';

import React from 'react';

interface GameCanvasProps {
    iframeSrc: string | null;
    placeholderMessage: string;
    iframeRef: React.RefObject<HTMLIFrameElement | null > | undefined; // Add iframeRef prop
}

const GameCanvas: React.FC<GameCanvasProps> = ({ iframeSrc, placeholderMessage, iframeRef }) => {

    return (
        <div className="border-gray-300 overflow-hidden shadow-md h-[470px] mx-auto"> {/* Added shadow-md for subtle elevation */}
            {iframeSrc ? (
                <iframe
                    ref={iframeRef}
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 'none', display: 'block' }}
                />
            ) : (
                <div className="flex items-center justify-center h-[600px] bg-gray-100 text-gray-500 p-8 text-center"> {/* Added p-8 and text-center for better placeholder layout */}
                    <p className="text-xl italic text-gray-600">{placeholderMessage}</p> {/* Slightly refined placeholder text style */}
                </div>
            )}
        </div>
    );
};

export default GameCanvas;
