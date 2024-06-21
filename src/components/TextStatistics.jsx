import React, { useContext } from 'react';
import { TextEditorContext } from '../context/TextEditorContext';

const TextStatistics = () => {
    const { state } = useContext(TextEditorContext);

    const wordCount = state.text.trim().split(/\s+/).filter(Boolean).length;
    const charCount = state.text.length;
    const readingTime = (wordCount / 200).toFixed(2);

    return (
        <div className="statistics">
            <p>Word Count: {wordCount}</p>
            <p>Character Count: {charCount}</p>
            <p>Estimated Reading Time: {readingTime} minutes</p>
        </div>
    );
};

export default TextStatistics;
