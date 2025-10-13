import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {new Date().getFullYear()} &middot; By <a href="https://github.com/xirzo" target="_blank" rel="noopener noreferrer">xirzo</a>
            </div>
        </footer>
    )
}

export default Footer;
