import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F2AF29',
      main: '#4E878C', //'#F2AF29', //'#251F47'
      dark: '#AD343E',
    },
    secondary: {
      main: '#E0E0CE',
    },
    text: {
      primary: "#404E7C",
      secondary: "#71B48D"
    }
  },
  typography: {
    fontFamily: "'Dokdo', cursive"
  }
});

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#F2AF29',
//       main: '#F2AF29', //', //'#251F47'
//       dark: '#AD343E',

//     },
//     secondary: {
//       main: '#E0E0CE',
//     },
//     text: {
//       primary: "#404E7C",
//       secondary: "#71B48D"
//     }
//   },
//   typography: {
//     fontFamily: "Pacifico"
//   }
// });


export default theme
