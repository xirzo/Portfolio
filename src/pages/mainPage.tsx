import { useRef } from "react";
import Greetings from "../widgets/greetings/greetings";
import ProjectsSection from "../widgets/projectsSection";

function MainPage() {
    const projectsSectionRef = useRef<HTMLDivElement>(null);

    const scrollToProjects = () => {
        projectsSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="vertical-stack-container">
            <Greetings telegramTag={"nottt55234"} email={""} githubNickname={"xirzo"} onViewProjects={scrollToProjects} />

            <ProjectsSection ref={projectsSectionRef} />
        </div >
    );
}

export default MainPage;
