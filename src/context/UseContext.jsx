import React, {createContext, useState} from 'react';



const ThemeContext = React.createContext('light');

function LightModeProvider(props) {
    const [lightMode, setLightMode] = useState(false);
    const toggleLightMode = () => {
        setLightMode(!lightMode);
    };
    return (
        <div>
            <ThemeContext.Provider value={{lightMode, toggleLightMode}}>
                {props.Children}
            </ThemeContext.Provider>
        </div>
    )
};
export { ThemeContext, LightModeProvider}; 