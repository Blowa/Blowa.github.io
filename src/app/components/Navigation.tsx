// components/Navigation.tsx
// import React from 'react';
// import Link from 'next/link';

// interface NavigationProps {
    // activeSection?: 'Modules' | 'Videos' | 'About Me'; // Optional prop to indicate active section
// }

// const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
    // return (
        // <nav className="fixed top-0 w-full z-10** bg-gray-300 border-b border-gray-200 py-4">
            // <div className="container mx-auto px-4 flex items-center justify-between">
                // <Link href="/" className="text-xl font-bold text-gray-800"> [> You can replace with your logo or name <]
                    // My Portfolio
                // </Link>
                // <div className="hidden sm:flex space-x-6"> [> Hidden on small screens, flex on larger <]
                    // <NavLink href="/" label="Modules" isActive={activeSection === 'Modules'} />
                    // <NavLink href="/videos" label="Videos" isActive={activeSection === 'Videos'} />
                    // <NavLink href="/about" label="About Me" isActive={activeSection === 'About Me'} />
                // </div>
                // [> Mobile Navigation (Hamburger menu could be added here for more complex nav) <]
                // [> For now, keeping it simple and hiding nav links on small screens <]
            // </div>
        // </nav>
    // );
// };

// interface NavLinkProps {
    // href: string;
    // label: string;
    // isActive?: boolean;
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive }) => {
    // const activeClass = isActive ? 'text-sky-600 font-semibold' : 'text-gray-600 hover:text-sky-800';
    // return (
        // <Link href={href} className={`px-3 py-2 rounded-md ${activeClass} transition-colors duration-200`}>
            // {label}
        // </Link>
    // );
// };

// export default Navigation;

// import React from 'react';
// import Link from 'next/link';

// interface NavigationProps {
    // activeSection?: 'Modules' | 'Videos' | 'About Me';
// }

// const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
    // return (
        // <nav className="fixed top-0 w-full z-10 bg-white shadow-md"> [> Changed background to white, added subtle shadow <]
        // [> <nav className="fixed top-0 w-full z-10 backdrop-blur-sm shadow-md"> <]
            // <div className="container mx-auto px-6 py-4 flex items-center justify-between"> [> Increased horizontal padding slightly <]
                // <Link href="/" className="text-xl font-bold text-gray-100"> [> Darker text for logo <]
                    // My Portfolio
                // </Link>
                // <div className="hidden sm:flex space-x-8"> [> Increased space between links <]
                    // <NavLink href="/" label="Modules" isActive={activeSection === 'Modules'} />
                    // <NavLink href="/videos" label="Videos" isActive={activeSection === 'Videos'} />
                    // <NavLink href="/about" label="About Me" isActive={activeSection === 'About Me'} />
                // </div>
                // [> Mobile Navigation (Hamburger menu could be added here) <]
            // </div>
        // </nav>
    // );
// };

// interface NavLinkProps {
    // href: string;
    // label: string;
    // isActive?: boolean;
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive }) => {
    // const activeClass = isActive
        // ? 'text-sky-600 font-semibold bg-sky-50' // Active state: Sky blue text, light sky background
        // : 'text-gray-700 hover:text-sky-700 hover:bg-gray-100'; // Hover: Darker sky blue text, light gray background

    // return (
        // <Link
            // href={href}
            // className={`px-4 py-2 rounded-md ${activeClass} transition-colors duration-200`} // Slightly increased horizontal padding
        // >
            // {label}
        // </Link>
    // );
// };

// export default Navigation;

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { usePathname } from 'next/navigation';

interface NavigationProps {
    activeSection?: 'Modules' | 'Projects' | 'About Me';
}

const Navigation: React.FC<NavigationProps> = () => {
    const pathname = usePathname();

    const getActiveSection = () => {
        if (pathname === '/') {
            return 'Modules';
        } else if (pathname === '/projects') {
            return 'Projects';
        } else if (pathname === '/about') {
            return 'About Me';
        }
        return undefined;
    }

    const activeSection = getActiveSection();

    return (
        <nav className="fixed top-0 w-full z-10 bg-white backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-8"> {/* Flex container for image and text */}
                    <div className="relative w-10 h-10 rounded-full overflow-hidden transform scale-190"> {/* Container for profile image */}
                        <Image
                            src="/img/me.jpg" // Replace with your profile picture path (in public folder or URL)
                            alt="Your Profile Picture"
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover' }} // Cover object fit for image within container
                            priority // Optional: prioritize loading of this image if it's important for initial view
                        />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">Maxime Littiere</h1> {/* Your Name - larger and bold */}
                        <p className="text-sm text-gray-600">Gameplay Programmer</p> {/* Profession - smaller and muted */}
                    </div>
                </Link>
                <div className="hidden sm:flex space-x-8">
                    <NavLink href="/" label="Modules" isActive={activeSection === 'Modules'} />
                    <NavLink href="/projects" label="Projects" isActive={activeSection === 'Projects'} />
                    <NavLink href="/about" label="About Me" isActive={activeSection === 'About Me'} />
                </div>
                {/* Mobile Navigation (Hamburger menu could be added here) */}
            </div>
        </nav>
    );
};

interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive }) => {
    const activeClass = isActive
        ? 'text-sky-600 font-semibold bg-sky-50'
        : 'text-gray-700 hover:text-sky-700 hover:bg-gray-100';

    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-md ${activeClass}`}
        >
            {label}
        </Link>
    );
};

export default Navigation;
