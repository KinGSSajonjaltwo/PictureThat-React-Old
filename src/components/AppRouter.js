import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "routes/Admin";
import Home from "routes/Home";
import KeywordPage from "routes/KeywordPage";

const AppRouter = () => {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/keyword" element={<KeywordPage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;