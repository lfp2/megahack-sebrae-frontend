import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FF7D64',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffff',
      dark: '#ba000d',
      contrastText: '#FF7D64',
    },
  },
});
