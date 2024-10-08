import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/PageHome";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WorksPage from "../pages/PageIndividualWorks";

function AppRouter () {

    return (
        <BrowserRouter basename="/">
            <Routes>
                < Route path="/" exact element={< Home />} />
                < Route path="/works/:id" element={< WorksPage />} />
            </Routes>
            < Footer />
        </BrowserRouter>
    )
}

export default AppRouter;