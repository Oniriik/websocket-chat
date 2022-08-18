import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'Routes';
import { GlobalStyles } from 'Styles';

import 'antd/dist/antd.min.css';

export const App: React.FC = () => {

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes />
        </BrowserRouter>
    );
};
