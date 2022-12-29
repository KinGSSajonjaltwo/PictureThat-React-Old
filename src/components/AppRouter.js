import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "routes/Home";
import KeywordPage from "routes/KeywordPage";

const AppRouter = () => {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/keyword" element={<KeywordPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;