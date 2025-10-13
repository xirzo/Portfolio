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
                ? <i className="fa-solid fa-sun" />
                : <i className="fa-solid fa-moon" />
            }
        </IconButton>
    );
}

export default ThemeSwitcher;
