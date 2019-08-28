import { useLayoutEffect } from 'react';   //useEffect

export const useTheme=(theme)=> {
    useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key]);  //--button-border none
      }
    },
    [theme] // Only call again if theme object reference changes
  );
}
