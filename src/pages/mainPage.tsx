import Button from "../shared/button/button";
import Card from "../shared/card/card";
import Greetings from "../widgets/greetings/greetings";
import ProjectsSection from "../widgets/projectsSection";

function MainPage() {
    return (
        <div className="vertical-stack-container">
            <Greetings />

            <ProjectsSection />

            <section className="grid-container">
                <Card>
                    <h1>Sharp heading</h1>
                    <p>A muted shade for the rest of the text.</p>
                    <Button>
                        Some Action
                    </Button>
                </Card>

                <Card>
                    <h1>Sharp heading</h1>
                    <p>A muted shade for the rest of the text.</p>
                    <Button>
                        Some Action
                    </Button>
                </Card>

                <div className="wide-row">
                    <Card>
                        <h1>Sharp heading</h1>
                        <p>A muted shade for the rest of the text.</p>
                        <Button>
                            Some Action
                        </Button>
                    </Card>
                </div>

                <Card>
                    <h1>Sharp heading</h1>
                    <p>A muted shade for the rest of the text.</p>
                    <Button>
                        Some Action
                    </Button>
                </Card>

                <Card>
                    <h1>Sharp heading</h1>
                    <p>A muted shade for the rest of the text.</p>
                    <Button>
                        Some Action
                    </Button>
                </Card>
            </section>
        </div>
    );
}

export default MainPage;
