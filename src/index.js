import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/vazir.css'
import { getDirection } from './localization/index';
document.getElementsByTagName('body')[0].setAttribute('dir',getDirection())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
