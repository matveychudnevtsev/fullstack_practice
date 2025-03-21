import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Селективно создаём корневой узел для React (с версии 18)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим наше приложение <App />
root.render(<App />);
