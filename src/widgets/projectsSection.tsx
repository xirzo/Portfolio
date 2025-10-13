import Button from "../shared/button/button";
import Card from "../shared/card/card";

function ProjectsSection() {
    return (
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
    )
}

export default ProjectsSection;
