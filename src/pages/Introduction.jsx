import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import ScormFunctions from "../scorm/ScormFunctions";
import LangController from "../language/LangController";
import serverLang from "../language/LangController";

const Introduction = () => {
    const { localLang, serverLang, loading, count, friends } =
        useContext(AppContext);
    const pageID = 0;
    let i18n_ap = localLang.pages[pageID];
    useEffect(() => {
        console.log(serverLang);
        console.log(serverLang[pageID]);
        if (serverLang.length) {
            console.log("server lang has length");
            i18n_ap = serverLang[pageID];
        }
        console.log(i18n_ap);
        console.log(friends);
        console.log(serverLang.length);
    }, [loading]);

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
            <p>{loading ? "loading" : "not loading"}</p>
            <p>{count}</p>
            <p>{friends.length}</p>
            <p>{serverLang.length}</p>
            {/* <LangController /> */}
        </div>
    );
};

export default Introduction;
