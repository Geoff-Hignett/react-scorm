import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LangContextProvider from "./context/LangContext";
import ScormProvider from "./scorm/ScormProvider";
import Edit from "./edit/Edit";
import Introduction from "./pages/Introduction";
import Section1 from "./pages/Section1";
import Summary from "./pages/Summary";
import "./index.scss";

function App() {
    const navigate = useNavigate();

    const initApp = () => {
        navigate("/introduction");
    };

    useEffect(() => {
        initApp();
    }, []);

    return (
        <>
            <ScormProvider>
                <LangContextProvider>
                    <Routes>
                        <Route path="/introduction" element={<Introduction />} />
                        <Route path="/section1" element={<Section1 />} />
                        <Route path="/summary" element={<Summary />} />
                    </Routes>
                    <Edit />
                </LangContextProvider>
            </ScormProvider>
        </>
    );
}

export default App;
