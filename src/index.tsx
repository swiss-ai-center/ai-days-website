import {CircularProgress} from '@mui/material';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import store from 'utils/store';
import App from './App';
import "./i18n";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<CircularProgress/>}>
                <App/>
            </Suspense>
        </Provider>
    </React.StrictMode>
);
