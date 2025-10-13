import MainPage from "../pages/mainPage"
import Footer from "../widgets/footer/footer"
import Navbar from "../widgets/navbar/navbar"

function App() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Navbar />
            <div style={{
                width: '100%',
                maxWidth: '700px',
                margin: '0 auto',
                flex: 1,
            }}>
                <MainPage />
            </div>
            <Footer />
        </div>
    )
}

export default App;
