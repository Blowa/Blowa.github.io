// components/ModuleList.tsx
import React from 'react';
import { GameModule } from '@/app/types/module'; // Adjust path as needed
import ModuleThumbnail from './ModuleThumbnail';

interface ModuleListProps {
    modules: GameModule[];
    onLaunch: (index: number) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ modules, onLaunch }) => {
    return (
        <section>
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Interactive Gameplay Demos</h2> */}
            {/* <p className="text-gray-600 mb-8 text-center"> */}
                {/* Click on a demo below to explore interactive examples of my gameplay programming skills. */}
                {/* These modules showcase pathfinding, procedural generation, and more. */}
            {/* </p> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8"> {/* Tailwind grid classes */}
                {modules.map((module, index) => (
                    <ModuleThumbnail
                        key={index}
                        module={module}
                        onLaunch={() => onLaunch(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ModuleList;

// import React from 'react';
// import { GameModule } from '@/app/types/module'; // Adjust path as needed
// import ModuleThumbnail from './ModuleThumbnail';

// interface ModuleListProps {
  // modules: GameModule[];
  // onLaunch: (index: number) => void;
// }

// const ModuleList: React.FC<ModuleListProps> = ({ modules, onLaunch }) => {
  // return (
    // <section>
      // <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Interactive Modules</h2>
      // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        // {modules.map((module, index) => (
          // <ModuleThumbnail
            // key={index}
            // module={module}
            // onLaunch={() => onLaunch(index)}
          // />
        // ))}
      // </div>
    // </section>
  // );
// };

// export default ModuleList;
