// App.jsx
import React from 'react';
import { TextEditorProvider } from './context/TextEditorContext';
import './App.css';
import TextEditor from './components/TextEditor';
import TextStatistics from './components/TextStatistics';
import TextTransformations from './components/TextTransformations';
import Preview from './components/Preview';
import Header from './components/Header'; // Import Header component

const App = () => {
    return (
        <TextEditorProvider>
            <div className="App">
                <Header />
                <TextEditor />
                <TextStatistics />
                <TextTransformations />
                <Preview />
            </div>
        </TextEditorProvider>
    );
};

export default App;
