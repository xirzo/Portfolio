import Greetings from "../widgets/greetings/greetings";
import ProjectsSection from "../widgets/projectsSection";

function MainPage() {
    return (
        <div className="vertical-stack-container">
            <Greetings telegramTag={"nottt55234"} email={""} githubNickname={"xirzo"} />

            <ProjectsSection />
        </div >
    );
}

export default MainPage;
