import { useState } from "react";

export const lightTheme = {
    backgroundColor : 'grey',
    color : 'white'
};

export const darkTheme = {
    backgroundColor : 'black',
    color: 'grey',
};


export default function useTheme () {
    const [isTheme, setTheme] = useState(lightTheme);
    const theme = isTheme ? darkTheme : lightTheme ;

    // const [theme, setTheme] = useState(lightTheme);
    // const theme = isTheme ? darkTheme : lightTheme ;

    const toggleTheme = () => {
        console.log('sa clic');
        setTheme(!lightTheme);
    //   setTheme(isTheme === '.light-theme' ? '.dark-theme' : '.light-theme');
    };
  
    return {
      isTheme,
      theme,
      toggleTheme,
    };
  };