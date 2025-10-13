import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.css';
import './app/global.css'
import App from './app/App.tsx'

// TODO: download link for pdf of resume
// TODO: make navbar items look not like buttons

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
