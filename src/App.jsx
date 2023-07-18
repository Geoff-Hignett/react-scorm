import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppProvider } from "./AppContext";
import ScormProvider from "./scorm/ScormProvider";
import Edit from "./edit/Edit";
import Introduction from "./pages/Introduction";
import Section1 from "./pages/Section1";
import Summary from "./pages/Summary";
import "./index.css";

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
                <AppProvider>
                    <Routes>
                        <Route path="/introduction" element={<Introduction />}/>
                        <Route path="/section1" element={<Section1 />} />
                        <Route path="/summary" element={<Summary />} />
                    </Routes>
                    <Edit />
                </AppProvider>
            </ScormProvider>
        </>
    );
}

export default App;
