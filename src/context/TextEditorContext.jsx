import React, { useReducer, createContext } from 'react';

const initialState = {
    text: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.payload };
        case 'CLEAR_TEXT':
            return { ...state, text: '' };
        case 'TO_UPPERCASE':
            return { ...state, text: state.text.toUpperCase() };
        case 'TO_LOWERCASE':
            return { ...state, text: state.text.toLowerCase() };
        case 'REMOVE_SPACES':
            return { ...state, text: state.text.replace(/\s+/g, ' ').trim() };
        default:
            return state;
    }
};

export const TextEditorContext = createContext();

export const TextEditorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TextEditorContext.Provider value={{ state, dispatch }}>
            {children}
        </TextEditorContext.Provider>
    );
};
