import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

export function Home() {
    const { data } = useContext(AppContext);
    const i18r = data.language.routes[0];

    useEffect(() => {}, []);
    return (
        <div>
            <h1 className="mb-5">Home</h1>
            <h1 className="mb-5">{i18r.h1}</h1>
            <Link to="about">About</Link>
        </div>
    );
}
