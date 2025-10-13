import AnimatedHover from "../../shared/animatedHover/animatedHover";
import Button from "../../shared/button/button";
import IconButton from "../../shared/iconButton/iconButton";
import './greetings.css'

export interface GreetingsProps {
    telegramTag: string;
    email: string;
    githubNickname: string;
}

function Greetings({ telegramTag, email, githubNickname }: GreetingsProps) {
    return (
        <section className="greetings-section">
            <div className="greetings-content">
                <AnimatedHover>
                    <h1 className="greetings-title">
                        Hello, I am Aleksandr Zhidkov
                    </h1>
                </AnimatedHover>

                <h2 className="greetings-subtitle">
                    Software Engineering Student at ITMO University
                </h2>

                <p className="greetings-description">
                    Passionate about software development, algorithms, and building innovative solutions.
                </p>

                <div className="greetings-buttons-container">
                    <Button>
                        Get Resume
                    </Button>

                    <Button>
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
