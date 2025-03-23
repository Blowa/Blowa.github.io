import React from 'react';

const shapes = [
    { name: 'circle', svg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>` },
    { name: 'cross', svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>` },
    { name: 'square', svg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16"/></svg>` },
    { name: 'triangle', svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21H23L12 2Z"/></svg>` },
];

// const BackgroundShapes: React.FC = () => {
    // return (
        // <div className="fixed inset-0 pointer-events-none -z-10"> [> Fixed, full viewport, behind content, no pointer interaction <]
            // {shapes.map((shape, index) => (
                // <div
                    // key={index}
                    // // className={`absolute opacity-5 text-gray-400 animate-float`} // Adjust opacity and color, add animation class
// className={`absolute opacity-15 animate-float w-16 h-16`}
                    // style={{
                        // // Randomize initial position and size for variety
                        // top: `${Math.random() * 100}vh`,
                        // left: `${Math.random() * 100}vw`,
                        // fontSize: `${2 + Math.random() * 3}rem`, // Size between 2rem and 5rem
                        // animationDelay: `${Math.random() * 5}s`, // Stagger animation start
                    // }}
                    // dangerouslySetInnerHTML={{ __html: shape.svg }} // Render SVG string
                // />
            // ))}
        // </div>
    // );
// };

// export default BackgroundShapes;

const numberOfShapes = 20; // Example: Increase to 20 shapes
const shapesArray = Array.from({ length: numberOfShapes }, (_, index) => shapes[index % shapes.length]); // Repeat shapes array to create more instances

const BackgroundShapes: React.FC = () => {
    const gridRows = 5; // Example: 5 rows
    const gridCols = 5; // Example: 5 columns

    return (
        <div className="fixed inset-0 pointer-events-none -z-10">
            {shapesArray.map((shape, index) => {
                const row = index % gridRows;
                const col = Math.floor(index / gridRows) % gridCols; // Distribute across columns too for more even spread

                const gridSpacingX = 100 / gridCols; // Percentage width for columns
                const gridSpacingY = 100 / gridRows; // Percentage height for rows

                const randomOffsetX = (Math.random() - 0.5) * gridSpacingX * 0.8; // Small random offset within cell
                const randomOffsetY = (Math.random() - 0.5) * gridSpacingY * 0.8;

                const topPosition = `${row * gridSpacingY + gridSpacingY / 2 + randomOffsetY}vh`; // Center in row + random offset
                const leftPosition = `${col * gridSpacingX + gridSpacingX / 2 + randomOffsetX}vw`; // Center in col + random offset


                return (
                    <div
                        key={index}
                        className={`absolute opacity-15 animate-float w-24 h-24`}
                        style={{
                            top: topPosition,
                            left: leftPosition,
                            fontSize: `${2 + Math.random() * 3}rem`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                        dangerouslySetInnerHTML={{ __html: shape.svg }}
                    />
                );
            })}
        </div>
    );
};

export default BackgroundShapes;
