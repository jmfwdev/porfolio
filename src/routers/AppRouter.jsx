import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/PageHome";
import Footer from '../components/Footer';
import WorksPage from "../pages/PageIndividualWorks";
import LoadingPage from "../components/LoadingPage";


function AppRouter () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process (e.g., fetching data)
        setTimeout(() => {
        setLoading(false);
        }, 3000); // Simulating a 3-second load time
    }, []);

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={loading ? <LoadingPage /> : <Home />} />
                <Route path="/works/:id" element={loading ? <LoadingPage /> : <WorksPage />} />
            </Routes>
            { !loading && < Footer />}
        </BrowserRouter>
    )
}

export default AppRouter;