// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link'; // Import Link for resume download
// import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'

// const AboutPage: React.FC = () => {
    // return (
        // <>
            // <Head>
                // <title>About Me - Your Portfolio</title>
                // <meta name="description" content="Learn more about [Your Name], a Gameplay Programmer" />
            // </Head>

            // <main className="container mx-auto px-6 py-12">
                // <section className="mb-12 flex flex-col items-center">
                    // <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                        // <Image
                            // src="/moi2.jpg" // Replace with your profile picture path
                            // alt="Your Profile Picture"
                            // fill
                            // sizes="100vw"
                            // style={{ objectFit: 'cover' }}
                        // />
                    // </div>
                    // <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Me</h1>
                    // <p className="text-gray-700 leading-relaxed text-center">
                        // [Your Introduction Paragraph Here - talk about yourself, your passion for gameplay programming, etc.]
                    // </p>
                // </section>

                // <section className="mb-12">
                    // <h2 className="text-2xl font-semibold text-gray-900 mb-3">Skills & Expertise</h2>
                    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        // [> Example Skill Items - Replace with your actual skills <]
                        // <div className="bg-gray-50 rounded-md p-4 shadow-sm">Skill 1</div>
                        // <div className="bg-gray-50 rounded-md p-4 shadow-sm">Skill 2</div>
                        // <div className="bg-gray-50 rounded-md p-4 shadow-sm">Skill 3</div>
                        // <div className="bg-gray-50 rounded-md p-4 shadow-sm">Skill 4</div>
                        // <div className="bg-gray-50 rounded-md p-4 shadow-sm">Skill 5</div>
                        // <div className="bg-gray-50 rounded-md p-4 shadow-sm">Skill 6</div>
                        // [> ... more skills ... <]
                    // </div>
                // </section>

                // <section className="mb-12">
                    // <h2 className="text-2xl font-semibold text-gray-900 mb-3">Experience & Background</h2>
                    // <p className="text-gray-700 leading-relaxed">
                        // [Your Experience Paragraph Here - Briefly describe your background, education, relevant projects, etc.]
                    // </p>
                    // [> You can add more detailed experience items here if needed <]
                // </section>

                // <section>
                    // <h2 className="text-2xl font-semibold text-gray-900 mb-3">Let's Connect!</h2>
                    // <p className="text-gray-700 leading-relaxed mb-6">
                        // I'm always open to new opportunities and collaborations. Feel free to reach out!
                    // </p>

                    // <div className="mb-6"> [> Resume Download Link <]
                        // <Link href="/resume.pdf"  // Replace with the actual path to your resume file in the public directory
                              // download // Important: Add the 'download' attribute
                              // className="inline-flex items-center px-5 py-3 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-medium cursor-pointer transition-colors duration-200 text-center"
                        // >
                        // <FaFileDownload className="h-6 w-6 mr-2" />
                            // Download My Resume
                        // </Link>
                    // </div>


                    // <div className="flex space-x-6"> [> Contact Icons <]
                        // <a href="mailto:your-email@example.com" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
                            // <FaEnvelope className="h-6 w-6" />
                        // </a>
                        // <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
                            // <FaLinkedin className="h-6 w-6" />
                        // </a>
                        // <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
                            // <FaGithub className="h-6 w-6" />
                        // </a>
                        // [> Add more social/contact links as needed <]
                    // </div>
                // </section>
            // </main>
        // </>
    // );
// };

// export default AboutPage;

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from '@/app/components/Footer';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Learn more about Maxime Littiere, a Gameplay Programmer" />
            </Head>

            <main className="bg-background text-foreground py-20"> {/* Off-white background for main container, increased py */}
                <div className="container mx-auto px-6"> {/* Container inside main with horizontal padding */}
                    <section className="mb-16"> {/* Increased margin-bottom for introduction */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md"> {/* Added shadow to profile image */}
                                <Image
                                    src="/img/me.jpg"
                                    alt="My Profile Picture"
                                    fill
                                    sizes="100vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">About Me</h1> {/* Larger, bolder heading */}
                            <p className="text-lg text-gray-800 leading-relaxed text-center max-w-2xl"> {/* Slightly darker, larger body text, max width */}
                                I am a game designer and a self-taught developer. I have a passion for creating games and programming.
                            </p>
                        </div>
                    </section>

                    <section className="mb-16 px-4"> {/* Increased margin-bottom, added horizontal padding for sections */}
                        <h2 className="text-3xl font-bold text-sky-700 mb-6">Skills & Expertise</h2> {/* Sky blue heading, larger */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap in skills grid */}
                            {/* Example Skill Items - Refined Skill Boxes */}
                            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-800">Game designer</div> {/* White skill boxes with better shadow and hover */}
                            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-800">Programmer</div>
                            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-800">C++</div>
                            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-800">C#</div>
                            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-800">Rust</div>
                            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-800">Problem solving</div>
                            {/* ... more skills ... */}
                        </div>
                    </section>

                    <section className="mb-16 px-4"> {/* Increased margin-bottom, added horizontal padding */}
                        <h2 className="text-3xl font-bold text-sky-700 mb-6">Experience & Background</h2> {/* Sky blue heading, larger */}
                        <p className="text-lg text-gray-800 leading-relaxed"> {/* Slightly darker, larger body text */}
                            I made my own company named Juicy Frog and we had a very successful game named &quot;Moneygun Run!&quot.
                        </p>
                        {/* You can add more detailed experience items here if needed */}
                    </section>

                    <section className="px-4"> {/* Added horizontal padding for contact section */}
                        <h2 className="text-3xl font-bold text-sky-700 mb-6">Let&apos;s Connect!</h2> {/* Sky blue heading, larger */}
                        <p className="text-lg text-gray-800 leading-relaxed mb-8"> {/* Slightly darker, larger body text, increased mb */}
                            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
                        </p>

                        <div className="mb-8"> {/* Resume Download Link - increased mb */}
                            <Link href="resume_maxime_littiere_180225.pdf"
                                  download
                                  className="inline-flex items-center px-6 py-4 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-semibold cursor-pointer transition-colors duration-200 text-center shadow-md hover:shadow-lg" // Refined button styling - more padding, shadow
                            >
                                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                                Download My Resume
                            </Link>
                        </div>

                        <div className="flex space-x-8 justify-center"> {/* Increased space, centered icons */}
                            <a href="mailto:maxime.littiere06@gmail.com" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
                                <FaEnvelope className="h-7 w-7" /> {/* Slightly larger icons */}
                            </a>
                            <a href="https://linkedin.com/in/maxime-littiere-90b11b13b" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
                                <FaLinkedin className="h-7 w-7" /> {/* Slightly larger icons */}
                            </a>
                            <a href="https://github.com/blowa" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-700 transition-colors duration-200">
                                <FaGithub className="h-7 w-7" /> {/* Slightly larger icons */}
                            </a>
                            {/* Add more social/contact links as needed */}
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default AboutPage;
