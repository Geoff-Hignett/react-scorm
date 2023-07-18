import { useEffect, useContext, useState } from "react";
import { AppContext } from "../AppContext";

const LangController = ({ pageID }) => {
    const [serverLang, setServerLang] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getServerPages() {
            try {
                setLoading(true);
                const res = await fetch("http://localhost:3000/pages");
                const data = await res.json();
                setLoading(false);
                setServerLang(data);
            } catch (error) {
                setLoading(false);
                console.log("error");
            }
        }
        getServerPages();
    }, []);

    if (loading) {
        return (
            <>
                <h1>Loading</h1>
            </>
        );
    } else {
        return serverLang[pageID];
    }
};

export default LangController;

export const { serverLang } = LangController;
