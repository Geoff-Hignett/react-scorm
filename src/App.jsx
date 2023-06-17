import { Route, Routes } from "react-router-dom";
import { Introduction } from "./pages/Introduction";
import { Section1 } from "./pages/Section1";
import { Summary } from "./pages/Summary";
import { AppProvider } from "./AppContext";

import "./index.css";

function App() {
    return (
        <>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<Introduction />} />
                    <Route path="/section1" element={<Section1 />} />
                    <Route path="/summary" element={<Summary />} />
                </Routes>
            </AppProvider>
        </>
    );
}

export default App;
