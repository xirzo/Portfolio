import AnimatedHover from "../shared/animatedHover/animatedHover";
import Button from "../shared/button/button";
import Card from "../shared/card/card";

function MainPage() {
    return (
        <div className="stack-container">
            <AnimatedHover>
                <h1 className="page-title">
                    Hello. I am xirzo
                </h1>
            </AnimatedHover>

            <div className="grid-container">
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
            </div>
        </div>
    );
}

export default MainPage;
