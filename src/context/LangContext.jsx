import React, { useContext, useState, useEffect, createContext } from "react";
import EN from "../language/en.json";
import FR from "../language/fr.json";

const LangContext = createContext();

function LangContextProvider({ children }) {
    // Initialize state with local lang
    const [pages, setPages] = useState(EN.pages);
    const [langServer, setlangServer] = useState(false);

    // Replace local lang with server lang
    useEffect(() => {
        if (langServer) {
            async function getServerPages() {
                try {
                    const res = await fetch("http://localhost:3000/pages");
                    const data = await res.json();
                    setPages(data);
                } catch (error) {
                    console.log("error fetching server lang");
                }
            }
            getServerPages();
        }
    }, []);

    return (
        <LangContext.Provider value={{ pages }}>
            {children}
        </LangContext.Provider>
    );
}

export default LangContextProvider;

export function useLangContext() {
    const context = useContext(LangContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
