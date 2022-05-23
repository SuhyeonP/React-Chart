import React from 'react';
import {Route, Routes } from 'react-router-dom';
import App from "~/src/App";

const Router = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route index element={<App />}/>
                </Route>
            </Routes>
        </>
    )
}

export default Router;
