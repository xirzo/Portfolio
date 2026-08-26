import AnimatedHover from "../../shared/animatedHover/animatedHover";
import Button from "../../shared/button/button";
import IconButton from "../../shared/iconButton/iconButton";
import './greetings.css'

export interface GreetingsProps {
    telegramTag: string;
    email: string;
    githubNickname: string;
    onViewProjects: () => void;
}

function Greetings({ telegramTag, email, githubNickname, onViewProjects }: GreetingsProps) {
    return (
        <section className="greetings-section">
            <div className="greetings-content">
                <AnimatedHover>
                    <h1 className="greetings-title">
                        Hello, my name<br />is xirzo
                    </h1>
                </AnimatedHover>

                <h2 className="greetings-subtitle">
                    mai do "ba ba ba" and "wha wha wha"
                </h2>

                <div className="greetings-buttons-container">
                    <Button onClick={onViewProjects}>
                        View Projects
                    </Button>
                </div>

                <div className="greetings-social-container">
                    <IconButton
                        href={`https://github.com/${githubNickname}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github" />
                    </IconButton>

                    <IconButton
                        href={`mailto:${email}`}
                        size="xl"
                        aria-label="Email"
                    >
                        <i className="fa-solid fa-envelope" />
                    </IconButton>

                    <IconButton
                        href={`https://t.me/${telegramTag}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        aria-label="Telegram"
                    >
                        <i className="fa-brands fa-telegram" />
                    </IconButton>
                </div>
            </div>
        </section >
    )
}

export default Greetings;
