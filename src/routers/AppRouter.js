import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../components/Home';
import { Inicio } from '../components/Inicio';

export const AppRouter = ({ children }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/inicio' element={ <Inicio /> }/>
                <Route path="/" element={ <Home /> }/>
            </Routes>
            { children }
        </BrowserRouter>
    )
}
