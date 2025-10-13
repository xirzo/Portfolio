import Card from "../shared/card/card";
import ThemeSwitcher from "../shared/themeSwitcher";

function MainPage() {
    return (
        <>
            <ThemeSwitcher />

            <div
                style={{
                    marginTop: '1rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    maxHeight: '100vh',
                }}
            >
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
        </>
    );
}

export default MainPage;
