import AnimatedHover from "../shared/animatedHover/animatedHover";
import ProjectsSection from "../widgets/projectsSection";

function MainPage() {
    return (
        <div className="stack-container">
            <AnimatedHover>
                <h1 className="page-title">
                    Hello. I am xirzo
                </h1>
            </AnimatedHover>

            <ProjectsSection />
        </div>
    );
}

export default MainPage;
