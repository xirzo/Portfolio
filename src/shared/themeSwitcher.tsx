import { useEffect, useState } from "react";
import Button from "./button/button";

function ThemeSwitcher() {
    const getInitialTheme = () => {
        return localStorage.getItem("theme") || "dark";
    }

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.body.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
    );
}

export default ThemeSwitcher;
