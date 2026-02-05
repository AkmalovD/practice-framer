import LogoLoop from './LogoLoop';

const imageLogos = [
    { src: "/logo1.svg", alt: "Company 1", href: "https://company1.com" },
    { src: "/logo2.svg", alt: "Company 2", href: "https://company2.com" },
    { src: "/logo3.svg", alt: "Company 3", href: "https://company3.com" },
    { src: "/logo4.svg", alt: "Company 3", href: "https://company3.com" },
    { src: "/logo5.svg", alt: "Company 3", href: "https://company3.com" },
];

function App() {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-[#FFFF] my-32">
            <p className='text-[#757170] '>Trusted by 7,000+ top startups, freelancers and studios</p>

            <div className='h-[55px] w-[100vh] relative overflow-hidden'>
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={imageLogos}
                    speed={40}
                    direction="left"
                    logoHeight={20}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>
        </div>
    );
}

export default App