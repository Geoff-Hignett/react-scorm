import React, { useContext, useState, createContext } from "react";


const EditContext = createContext();

function EditContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const test = "test";

    return (
        <EditContext.Provider value={{ userLoggedIn, test }}>
            {children}
        </EditContext.Provider>
    );
}

export default EditContextProvider;

export function useEditContext() {
    const context = useContext(EditContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
