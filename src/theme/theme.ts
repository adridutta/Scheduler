import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
      mode: 'dark', 
      primary: {                 //card colors
        main: '#463732', 
        light: '#463732',
        dark: '#181311',
        contrastText: '#fff',
      },
      secondary: {          // text color
        main: '#181311',
      },
      background: {
        default: '#d9ae6a',
        paper: '#fff',
      },
      text: {
        primary: '#feeb82',
        secondary: '#ffffff'
      }
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
    },
  };
  
  // Create the theme
  const theme = createTheme(themeOptions);
  
  export default theme;