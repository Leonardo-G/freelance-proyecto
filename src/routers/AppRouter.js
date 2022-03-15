import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../components/Home';

import Web from "../components/webLayout/Web.jsx";
import Mobile from "../components/mobile/Mobile";
import Totem from "../components/totem/Totem";
import Api from "../components/apiLayout/Api";

export const AppRouter = ({ children }) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                
                {/* compañero */}
                <Route path="web" element={<Web />} />
                <Route path="mobile" element={<Mobile />} />
                <Route path="totem" element={<Totem />} />
                <Route path="api" element={<Api />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            { children }
        </BrowserRouter>
    )
}
