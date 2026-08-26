import Greetings from "../widgets/greetings/greetings";
import ProjectsSection from "../widgets/projectsSection";
import type { RefObject } from "react";

interface MainPageProps {
    projectsSectionRef: RefObject<HTMLDivElement | null>;
    greetingsSectionRef: RefObject<HTMLDivElement | null>;
}

function MainPage({ projectsSectionRef, greetingsSectionRef }: MainPageProps) {
    return (
        <div
            className="vertical-stack-container"
            style={{
                gap: '2rem'
            }}
        >
            <div ref={greetingsSectionRef}>
                <Greetings
                    telegramTag={"nottt55234"}
                    email={"garrytacffgh@gmail.com"}
                    githubNickname={"xirzo"}
                    onViewProjects={() => projectsSectionRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })} />
            </div>

            <div ref={projectsSectionRef}>
                <ProjectsSection />
            </div>
        </div >
    );
}

export default MainPage;
