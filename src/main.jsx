import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TextEditorProvider } from './context/TextEditorContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TextEditorProvider>
            <App />
        </TextEditorProvider>
    </React.StrictMode>
);
