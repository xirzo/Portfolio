import MainPage from "../pages/mainPage"
import Navbar from "../widgets/navbar/navbar"

function App() {
    return (
        <>
            <Navbar />

            <div
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    margin: '0 auto',
                    minHeight: '100vh',
                }}
            >
                <MainPage />
            </div>
        </>
    )
}

export default App
