import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F2AF29',
      main: '#251F47', //'#F2AF29', //'#251F47'
      dark: '#AD343E',

    },
    secondary: {
      main: '#E0E0CE',
    },
  },
  typography: {
    useNextVariants: true
  }
});

export default theme
