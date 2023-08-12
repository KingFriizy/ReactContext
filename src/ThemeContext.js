import { createContext, useContext, useState } from "react";


//creating a context instance using the createContext function
const ThemeContext = createContext(undefined)


export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider
            value = {{theme,
            toggleTheme: () => setTheme(theme == "light" ? "dark" : "light")}}
            >
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => (useContext(ThemeContext));