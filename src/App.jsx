import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AppProvider } from "./AppContext";

import "./index.css";

function App() {
    return (
        <>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <h1 className="text-base">test</h1>
            </AppProvider>
        </>
    );
}

export default App;
