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
                    imageUrl="https://private-user-images.githubusercontent.com/43218935/456203676-7360d829-a9dc-48a0-b81b-d6062b25f887.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjAzODA5MTEsIm5iZiI6MTc2MDM4MDYxMSwicGF0aCI6Ii80MzIxODkzNS80NTYyMDM2NzYtNzM2MGQ4MjktYTlkYy00OGEwLWI4MWItZDYwNjJiMjVmODg3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDEzVDE4MzY1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmMDg5MDBhYmM4Zjg5NGYyNjNhN2ExNjU0MTFiOTdkMWJkMTlmMDhlM2JkNjg4YjkwM2MzZTc1NTFlNTJkZTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UTAxCZdEXEbG83ifX6OzaToQlgzG4wyuPRfCaQotL3k"
                />

                <ProjectCard
                    projectName={"Breakout"}
                    briefDescription={"Game made with Raylib and Box2D"}
                    link={"https://github.com/xirzo/Breakout"}
                    detailedDescription={""}
                    imageUrl="https://private-user-images.githubusercontent.com/43218935/455168526-5c4b60bb-562a-4eba-832b-75c274df6de2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjAzODE3MjAsIm5iZiI6MTc2MDM4MTQyMCwicGF0aCI6Ii80MzIxODkzNS80NTUxNjg1MjYtNWM0YjYwYmItNTYyYS00ZWJhLTgzMmItNzVjMjc0ZGY2ZGUyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDEzVDE4NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRlYzMxMjJhYWVjZWY0MWFjZWUyNDdiY2RlZDIyNjYxYjc3MGZkNDBjZDQyMjRhNzBiNzk1OTY2YzVlNmZiM2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.IXpJZ5KRuE9OOM6IriDBImH3F0yt-rVFBWOpGqSR6ME"
                />

                <div className="wide-row">
                    <ProjectCard
                        projectName={"Pong"}
                        briefDescription={"Pong with client-server architecture and ECS"}
                        link={"https://github.com/xirzo/MultiplayerPong"}
                        detailedDescription={""}
                        imageUrl="https://private-user-images.githubusercontent.com/43218935/457219714-6d69f8f2-e079-4a09-8b78-c303faa134ec.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjAzODE4OTAsIm5iZiI6MTc2MDM4MTU5MCwicGF0aCI6Ii80MzIxODkzNS80NTcyMTk3MTQtNmQ2OWY4ZjItZTA3OS00YTA5LThiNzgtYzMwM2ZhYTEzNGVjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDEzVDE4NTMxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU4YTMyMWI2YTEzYmRmMjc1MmJjOTIzMDhhNGRmNjM3YjI5NGYwODRhMWViOGE4NTdiZTU3MGEwYjk1NGY4MjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AkODKbgVxWz7u1_7ib3SXYMc3Sw2UbOpmlhmsTCV-eg"
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
