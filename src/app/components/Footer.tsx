// components/Footer.tsx
// import React from 'react';
// import Link from 'next/link';

// const Footer: React.FC = () => {
    // const currentYear = new Date().getFullYear();

    // return (
        // <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16"> [> Added mt-16 to push footer down <]
            // <div className="container mx-auto px-4 text-center text-gray-500">
                // <p className="text-sm mb-2">
                    // © {currentYear} Your Name. All Rights Reserved. [> Replace "Your Name" with your actual name <]
                // </p>
                // <div className="flex justify-center space-x-6">
                    // <FooterLink href="https://github.com/your-github-username" label="GitHub" /> [> Replace with your GitHub link <]
                    // <FooterLink href="https://www.linkedin.com/in/your-linkedin-username" label="LinkedIn" /> [> Replace with your LinkedIn link <]
                    // [> Add more social media or relevant links as needed <]
                    // [> <FooterLink href="#" label="Twitter" /> <]
                    // [> <FooterLink href="#" label="Portfolio Email" /> <]
                // </div>
                // <p className="text-xs mt-4">
                    // Built with <Link href="https://nextjs.org/" className="text-blue-500 hover:underline">Next.js</Link> and <Link href="https://tailwindcss.com/" className="text-blue-500 hover:underline">Tailwind CSS</Link>
                // </p>
            // </div>
        // </footer>
    // );
// };

// interface FooterLinkProps {
    // href: string;
    // label: string;
// }

// const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
    // return (
        // <Link href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            // {label}
        // </Link>
    // );
// };

// export default Footer;

// components/Footer.tsx
import React from 'react';
// import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="background-color border-t-2 border-sky-500 py-8 mt-16"> {/* Lighter background, teal border */}
            <div className="container mx-auto px-4 text-center text-gray-600"> {/* Slightly darker text */}
                <p className="text-sm mb-2">
                    © {currentYear} Maxime Littiere. All Rights Reserved.
                </p>
                {/* <div className="flex justify-center space-x-6"> */}
                    {/* <FooterLink href="https://github.com/your-github-username" label="GitHub" /> */}
                    {/* <FooterLink href="https://www.linkedin.com/in/your-linkedin-username" label="LinkedIn" /> */}
                {/* </div> */}
                {/* <p className="text-xs mt-4"> */}
                    {/* Built with <Link href="https://nextjs.org/" className="**text-sky-500 hover:underline**">Next.js</Link> and <Link href="https://tailwindcss.com/" className="**text-sky-500 hover:underline**">Tailwind CSS</Link> [> Teal links <] */}
                {/* </p> */}
            </div>
        </footer>
    );
};

{/* interface FooterLinkProps { */}
    {/* href: string; */}
    {/* label: string; */}
{/* } */}

{/* const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => { */}
    {/* return ( */}
        {/* <Link href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition-colors duration-200"> [> Teal hover for links <] */}
            {/* {label} */}
        {/* </Link> */}
    {/* ); */}
{/* }; */}

export default Footer;
