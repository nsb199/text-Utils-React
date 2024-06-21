import React, { useContext } from 'react';
import { TextEditorContext } from '../context/TextEditorContext';

const TextEditor = () => {
    const { state, dispatch } = useContext(TextEditorContext);

    const handleChange = (e) => {
        dispatch({ type: 'SET_TEXT', payload: e.target.value });
    };

    return (
        <textarea
            value={state.text}
            onChange={handleChange}
            placeholder="Type your text here..."
        />
    );
};

export default TextEditor;
