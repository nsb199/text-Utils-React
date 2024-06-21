import React, { useContext } from 'react';
import { TextEditorContext } from '../context/TextEditorContext';

const TextTransformations = () => {
    const { state, dispatch } = useContext(TextEditorContext);

    return (
        <div>
            <button onClick={() => dispatch({ type: 'TO_UPPERCASE' })}>Uppercase</button>
            <button onClick={() => dispatch({ type: 'TO_LOWERCASE' })}>Lowercase</button>
            <button onClick={() => dispatch({ type: 'CLEAR_TEXT' })}>Clear Text</button>
            <button onClick={() => dispatch({ type: 'REMOVE_SPACES' })}>Remove Extra Spaces</button>
            <button onClick={() => navigator.clipboard.writeText(state.text)}>Copy To Clipboard</button>
        </div>
    );
};

export default TextTransformations;
