import { Route, Routes } from "react-router-dom";
import { Introduction } from "./pages/Introduction";
import { Section1 } from "./pages/Section1";
import { Summary } from "./pages/Summary";
import { AppProvider } from "./AppContext";
import { Learner } from "./scorm/Learner";
import ScormProvider from "./scorm/index";
import ApiStatus from "./scorm/ApiStatus";

import "./index.css";

function App() {
    return (
        <>
            <ScormProvider>
                <AppProvider>
                    <Routes>
                        <Route path="/" element={<Introduction />} />
                        <Route path="/section1" element={<Section1 />} />
                        <Route path="/summary" element={<Summary />} />
                    </Routes>
                    <Learner />
                    <ApiStatus />
                </AppProvider>
            </ScormProvider>
        </>
    );
}

export default App;
