// // DarkModeToggle.jsx
// import React, { useContext } from 'react';
// import { TextEditorContext } from '../context/TextEditorContext';

// const DarkModeToggle = () => {
//     const { state, dispatch } = useContext(TextEditorContext);

//     const toggleDarkMode = () => {
//         dispatch({ type: 'TOGGLE_MODE' });
//     };

//     return (
//         <button className="dark-mode-button" onClick={toggleDarkMode}>
//             Switch to {state.isDarkMode ? 'Light' : 'Dark'} Mode
//         </button>
//     );
// };

// export default DarkModeToggle;
