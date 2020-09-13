import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F2AF29',
      main: '#474747',
      dark: '#AD343E'
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true
  }
});

export default theme
