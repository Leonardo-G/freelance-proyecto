import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/Header';

export const AppRouter = ({ children }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Header /> }/>
            </Routes>
            { children }
        </BrowserRouter>
    )
}
