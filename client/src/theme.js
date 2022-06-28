// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode#answer-64135466
// import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'; 
import { createTheme } from '@mui/material'; 

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    color: '#000000',
    fontSize: 22,
  },
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#fff",
    },
  }
});

export default theme;
