import React, { useContext } from 'react';
import { TextEditorContext } from '../context/TextEditorContext';

const Preview = () => {
    const { state } = useContext(TextEditorContext);

    return (
        <div className="preview">
            <h2>Preview</h2>
            <p>{state.text}</p>
        </div>
    );
};

export default Preview;
