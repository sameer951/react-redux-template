import { createTheme } from '@material-ui/core/styles';
import { purple, red, blue, grey } from '@material-ui/core/colors';

// Create a theme instance.
export const palette = {
  primary: {
    main: '#00203FFF', //#94D3AC
  },
  secondary: {
    main: '#ADEFD1FF', //#655C56
  },
  error: {
    main: red.A400,
  },
  background: {
    default: '#fff',
  },
  side_menu: {
    default: '#EFFCEF'
  }
}
const theme = createTheme({
  palette
});

export default theme;