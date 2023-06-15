import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    console.log("sldkfj");
    return (
        <AppContext.Provider
            value={{
                data: {
                    language: {
                        routes: [
                            {
                                route: "/",
                                h1: "E-Learning Course",
                                p1: "Welcome to the e-learning course",
                            },
                        ],
                    },
                },
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
