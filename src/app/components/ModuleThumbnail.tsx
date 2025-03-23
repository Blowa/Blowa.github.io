// components/ModuleThumbnail.tsx
import React from 'react';
import { GameModule } from '@/app/types/module'; // Adjust path as needed
import styles from './ModuleThumbnail.module.css'; // Import CSS module

interface ModuleThumbnailProps {
    module: GameModule;
    onLaunch: () => void;
}

const ModuleThumbnail: React.FC<ModuleThumbnailProps> = ({ module, onLaunch }) => {
    return (
        <div className={styles.thumbnailContainer} onClick={onLaunch}>
            <div className={styles.thumbnailImageContainer}>
                <img
                    src={module.thumbnailSrc}
                    alt={module.name}
                    className={styles.thumbnailImage}
                />
                <div className={styles.playIconOverlay}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={styles.playIcon}
                    >
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.992c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <h3 className={styles.thumbnailTitle}>{module.name}</h3>
            {/* Optional: Add tagline if you want to use it */}
            {/* {module.descriptionTagline && <p className={styles.thumbnailTagline}>{module.descriptionTagline}</p>} */}
        </div>
    );
};

export default ModuleThumbnail;
