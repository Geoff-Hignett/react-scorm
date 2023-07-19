import { useEffect, useContext, useState, createContext } from "react";
import EN from "./language/en.json";
import FR from "./language/fr.json";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [serverLang, setServerLang] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [friends, setFriends] = useState([]);
    // set course language
    const activeLang = EN;

    useEffect(() => {
        async function getServerPages() {
            try {
                setIsLoading(true);
                const res = await fetch("http://localhost:3000/pages");
                const data = await res.json();
                setIsLoading(false);
                // setServerLang([...serverLang, ...data]);
                setCount(count + 1);
                setFriends((prevFriends) => [
                    ...prevFriends,
                    {
                        name: "Random Friend Name",
                        age: 20, // Random age
                    },
                ]);
                setServerLang((prevServerLang) => [...prevServerLang, data]);
                console.log("no error");
            } catch (error) {
                setIsLoading(false);
                console.log("error");
            }
        }
        getServerPages();
    }, []);

    // if (isLoading) {
    return (
        <AppContext.Provider
            value={{
                localLang: activeLang,
                serverLang: serverLang,
                projectID: "74c7579e-ed5e-4da0-905f-8e9a503e09e1",
                loading: isLoading,
                count: count,
                friends: friends,
            }}
        >
            {children}
        </AppContext.Provider>
    );
    // } else {
    //     return (
    //         <AppContext.Provider
    //             value={{
    //                 lang: activeLang,
    //                 projectID: "74c7579e-ed5e-4da0-905f-8e9a503e09e1",
    //                 loading: isLoading,
    //             }}
    //         >
    //             {children}
    //         </AppContext.Provider>
    //     );
    // }
}
