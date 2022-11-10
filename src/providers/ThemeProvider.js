import { createContext } from "react";
import { Header } from "../components";

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    return (
        <ThemeContext.Provider value={{theme:{dark: false}}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
