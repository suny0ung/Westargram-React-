import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Counter from './pages/Counter-practice';
import './styles/reset.scss';
import './styles/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
