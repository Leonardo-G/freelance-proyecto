import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../components/Home';

export const AppRouter = ({ children }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
            </Routes>
            { children }
        </BrowserRouter>
    )
}
