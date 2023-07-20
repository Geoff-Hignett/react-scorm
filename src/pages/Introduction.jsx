import { Link } from "react-router-dom";
import ScormFunctions from "../scorm/ScormFunctions";
import { useLangContext } from "../context/LangContext";

const Introduction = () => {
    const { pages } = useLangContext();
    const pageID = 0;
    const i18n_ap = pages[pageID];

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
            <img src="/img/vite.svg" alt="" />
        </div>
    );
};

export default Introduction;
