import { useRef } from "react";
import MainPage from "../pages/mainPage";
import Footer from "../widgets/footer/footer";
import Navbar from "../widgets/navbar/navbar";

function App() {
    const projectsSectionRef = useRef<HTMLDivElement>(null);
    const bioSectionRef = useRef<HTMLDivElement>(null);
    const greetingsSectionRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const navbarItems = [
        {
            name: "Home",
            onClick: () => scrollToSection(greetingsSectionRef)
        },
        {
            name: "About",
            onClick: () => scrollToSection(bioSectionRef)
        },
        {
            name: "Projects",
            onClick: () => scrollToSection(projectsSectionRef)
        }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Navbar items={navbarItems} />

            <div style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                flex: 1,
            }}>
                <MainPage
                    projectsSectionRef={projectsSectionRef}
                    bioSectionRef={bioSectionRef}
                    greetingsSectionRef={greetingsSectionRef}
                />
            </div>
            <Footer githubUrl={'xirzo'} />
        </div>
    )
}

export default App;
