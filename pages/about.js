import { useRouter } from 'next/dist/client/router';

const About = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen mt-28 text-justify mx-auto px-12 max-w-4xl">
            <h1 className="pb-2 border-b-2 border-blue-800 text-3xl capitalize">Google Docs Clone</h1>
            <div className="flex items-center mt-5">
                A responsive web app that lets you edit and save docs on the go. Changes are persistent and the document gets saved automatically in realtime.
                <br /> <br />
                Experience a rich text editor with smart editing and styling tools to help you easily format text and paragraphs. Choose from fonts, add links, images, and drawings.
                <br /> <br />
            </div>
            <div className="pt-1">
                The project source code can be found at:
                <a href="https://github.com/VirajPatidar" target="_blank" rel="noreferrer">
                    <button className="ml-2 bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded inline-flex items-center align-middle" type="button">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                        <span>Viraj Patidar</span>
                    </button>
                </a>
                <br /><br />
            </div>
            <div>
                <span className="cursor-pointer text-blue-800 hover:underline" onClick={() => router.push(`/`)}>Login</span> using your google account to get started.
            </div>
        </div>
    );
}

export default About;