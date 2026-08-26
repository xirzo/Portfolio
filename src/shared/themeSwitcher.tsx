import { useEffect, useState } from "react";
import IconButton from "./iconButton/iconButton";

function ThemeSwitcher() {
    const getInitialTheme = () => {
        return localStorage.getItem("theme") || "dark";
    }

    const [theme, setTheme] = useState<string>(getInitialTheme);

    useEffect(() => {
        document.body.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <IconButton size='xl' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === 'dark'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-3a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm0 19a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29l1.41-1.41a1 1 0 1 0-1.41-1.41L5.64 5.64a1 1 0 0 0 0 1.41zm12.73 12.73a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29l1.41-1.41a1 1 0 1 0-1.41-1.41l-1.41 1.41a1 1 0 0 0 0 1.41zM17 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1zM5 12a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1zm.29 6.71a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29l1.41-1.41a1 1 0 1 0-1.41-1.41l-1.41 1.41a1 1 0 0 0 0 1.41zM17.66 5.64a1 1 0 0 0-.71-.29 1 1 0 0 0-.7.29l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0 0-1.41zM12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.35-1.05z"/></svg>
            }
        </IconButton>
    );
}

export default ThemeSwitcher;
