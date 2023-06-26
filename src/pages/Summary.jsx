import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

const Summary = () => {
    const { lang } = useContext(AppContext);
    const pageID = 2;
    const i18n_ap = lang.pages[pageID];

    useEffect(() => {
        // console.log(i18n_ap);
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-center font-semibold my-3">
                {i18n_ap.s1_h1}
            </h1>
            <p className="mb-5">{i18n_ap.s1_p1}</p>
            <Link to="/section1">
                <button className="bg-sky-500 text-white text-lg p-2 rounded cursor-pointer mr-5">
                    {i18n_ap.s1_b1}
                </button>
            </Link>
            <Link to="/introduction">
                <button className="bg-sky-500 text-white text-lg p-2 rounded cursor-pointer">
                    {i18n_ap.s1_b2}
                </button>
            </Link>
        </div>
    );
};

export default Summary;
