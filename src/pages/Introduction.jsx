import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import ScormFunctions from "../scorm/ScormFunctions";
import LangController from "../language/LangController";
import serverLang from "../language/LangController";

const Introduction = () => {
    const { lang } = useContext(AppContext);
    const pageID = 0;
    let i18n_ap = lang.pages[pageID];
    console.log(serverLang);
    console.log(lang);

    useEffect(() => {
        // console.log(profile);
        // console.log(i18n_ap);
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-center font-semibold my-3">
                {i18n_ap.s1_h1}
            </h1>
            <p className="mb-5">{i18n_ap.s1_p1}</p>
            <Link to="/section1">
                <button className="bg-sky-500 text-white text-lg p-2 rounded cursor-pointer">
                    {i18n_ap.s1_b1}
                </button>
            </Link>
            <ScormFunctions />
            <LangController />
        </div>
    );
};

export default Introduction;
