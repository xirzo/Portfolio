import ProjectCard from "../shared/projectCard/projectCard";

function ProjectsSection({ ...props }) {
    return (
        <section {...props}>
            <h3>
                Projects
            </h3>

            <div className="grid-container">
                <ProjectCard
                    projectName={"TicTacToe"}
                    briefDescription={"Multiplayer game, written in C"}
                    link={"https://github.com/xirzo/TicTacToe"}
                    detailedDescription={""}
                    imageUrl="/tictactoe.png"
                />

                <ProjectCard
                    projectName={"Breakout"}
                    briefDescription={"Game made with Raylib and Box2D"}
                    link={"https://github.com/xirzo/Breakout"}
                    detailedDescription={""}
                    imageUrl="/breakout.png"
                />

                <div className="wide-row">
                    <ProjectCard
                        projectName={"Pong"}
                        briefDescription={"Pong with client-server architecture and ECS"}
                        link={"https://github.com/xirzo/MultiplayerPong"}
                        detailedDescription={""}
                        imageUrl="/pong.png"
                    />
                </div>

                <ProjectCard
                    projectName={"DI Container"}
                    briefDescription={"Lightweight Dependency Injection library"}
                    link={"https://github.com/xirzo/XirzoDIContainer"}
                    detailedDescription={""}
                />

                <ProjectCard
                    projectName={"Group Queue"}
                    briefDescription={"App that is used to manage group queues"}
                    link={"https://github.com/xirzo/GroupQueue"}
                    detailedDescription={""}
                />
            </div>
        </section>
    )
}

export default ProjectsSection;
