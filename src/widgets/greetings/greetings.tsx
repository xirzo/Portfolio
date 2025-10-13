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
        <section
            className="vertical-stack-container"
            style={{
                minHeight: '100vh',
                justifyContent: 'center'
            }}>
            <div style={{
                width: '60%'
            }}>
                <AnimatedHover>
                    <h1 className="greetings-title">
                        Hello, I am Aleksandr Zhidkov
                    </h1>
                </AnimatedHover>

                <h2>
                    Software Engineering Student at ITMO University
                </h2>

                <p>
                    Passionate about software development, algorithms, and building innovative solutions.
                </p>

                <div className="horizontal-stack-container">
                    <Button>
                        Get Resume
                    </Button>

                    <Button>
                        View Projects
                    </Button>
                </div>

                <div
                    className="horizontal-stack-container"
                    style={{
                        marginTop: '1rem'
                    }}>
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
