import { useRef } from "react";
import Greetings from "../widgets/greetings/greetings";
import ProjectsSection from "../widgets/projectsSection";
import Bio from "../widgets/bio/bio";

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
            <Greetings
                telegramTag={"nottt55234"}
                email={"garrytacffgh@gmail.com"}
                githubNickname={"xirzo"}
                onViewProjects={scrollToProjects} />

            <Bio email={"garrytacffgh@gmail.com"} />

            <ProjectsSection ref={projectsSectionRef} />
        </div >
    );
}

export default MainPage;
