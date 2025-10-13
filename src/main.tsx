import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.css';
import './app/global.css'
import App from './app/App.tsx'

// TODO: greetings section
// TODO: about me section (contacs, bio, location, university, etc.)
// TODO: projects section
// TODO: skills/technologies
// TODO: download link for pdf of resume
// TODO: my blog link

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
