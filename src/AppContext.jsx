import { createContext } from "react";
import EN from "./language/en.json";
import FR from "./language/fr.json";

export const AppContext = createContext();

export function AppProvider({ children }) {
    // set course language
    const activeLang = FR;

    return (
        <AppContext.Provider value={{ lang: activeLang }}>
            {children}
        </AppContext.Provider>
    );
}
