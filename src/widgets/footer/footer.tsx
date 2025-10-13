import './footer.css'

interface FooterProps {
    githubUrl: string
}

function Footer({ githubUrl }: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-content">
                {new Date().getFullYear()} &middot;
                By <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github" />
                    xirzo
                </a>
            </div>
        </footer>
    )
}

export default Footer;
