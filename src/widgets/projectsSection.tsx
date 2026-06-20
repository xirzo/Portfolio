import ProjectCard from "../shared/projectCard/projectCard";

function ProjectsSection({...props}) {
    return (
        <section {...props}>
            <h3>
                Projects
            </h3>

            <div className="grid-container">
                <ProjectCard
                    projectName={"Xirblog"}
                    briefDescription={".NET Microservices blog application"}
                    link={"https://github.com/Xirblog"}
                    detailedDescription={
                        <>
                            A web application I built to practice microservices architecture. Currently being developed
                            with a small team of 2 people. Supports Markdown markup language for writing posts. <a href={import.meta.env.VITE_BLOG_URL}>Visit the blog</a>
                        </>
                    }
                    imageUrl=""
                />

                <ProjectCard
                    projectName={"TicTacToe"}
                    briefDescription={"Multiplayer game, written in C"}
                    link={"https://github.com/xirzo/TicTacToe"}
                    detailedDescription={""}
                    imageUrl="/tictactoe.png"
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
                    projectName={"Breakout"}
                    briefDescription={"Game made with Raylib and Box2D"}
                    link={"https://github.com/xirzo/Breakout"}
                    detailedDescription={""}
                    imageUrl="/breakout.png"
                />

                {/*<ProjectCard*/}
                {/*    projectName={"Group Queue"}*/}
                {/*    briefDescription={"App that is used to manage group queues"}*/}
                {/*    link={"https://github.com/xirzo/GroupQueue"}*/}
                {/*    detailedDescription={""}*/}
                {/*/>*/}
            </div>
        </section>
    )
}

export default ProjectsSection;
