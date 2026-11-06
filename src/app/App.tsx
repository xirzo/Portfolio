import { useEffect, useRef } from "react";
import MainPage from "../pages/mainPage";
import Footer from "../widgets/footer/footer";
import Navbar from "../widgets/navbar/navbar";

function App() {
    const projectsSectionRef = useRef<HTMLDivElement>(null);
    const greetingsSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const theme = localStorage.getItem("theme") || "dark";
        document.body.classList.toggle("light", theme === "light");
    }, []);

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

            <div className="app">
                <MainPage
                    projectsSectionRef={projectsSectionRef}
                    greetingsSectionRef={greetingsSectionRef}
                />
            </div>
            <Footer githubUrl={'xirzo'} />
        </div>
    )
}

export default App;
