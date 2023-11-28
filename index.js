import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './stylesheets/styles.scss';
import './stylesheets/confetti.scss';


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);
