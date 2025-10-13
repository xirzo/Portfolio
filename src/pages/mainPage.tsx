import Card from "../shared/card/card";
import ThemeSwitcher from "../shared/themeSwitcher";

function MainPage() {
    return (
        <div className="stack-container">
            <h1 className="page-title">
                Hello. I am xirzo
            </h1>
            <div className="grid-container">

                <Card>
                    <h1>Sharp heading</h1>
                    <p>A muted shade for the rest of the text.</p>
                    <ThemeSwitcher />
                </Card>

                <Card>
                    <h1>Sharp heading</h1>
                    <p>A muted shade for the rest of the text.</p>
                    <ThemeSwitcher />
                </Card>
            </div>
        </div>
    );
}

export default MainPage;
