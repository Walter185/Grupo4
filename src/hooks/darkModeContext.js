import { createContext } from "react";

export const DarkModeContext = createContext({
    darkMode: true,
    toggleDarkMode: () => {},
});