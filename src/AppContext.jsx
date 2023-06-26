import { createContext } from "react";
import EN from "./language/en.json";
import FR from "./language/fr.json";

export const AppContext = createContext();

export function AppProvider({ children }) {
    // set course language
    const activeLang = EN;

    return (
        <AppContext.Provider
            value={{
                lang: activeLang,
                projectID: "74c7579e-ed5e-4da0-905f-8e9a503e09e1",
                editToolEnabled: true,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
