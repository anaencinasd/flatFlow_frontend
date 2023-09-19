
import { createTheme} from '@mui/material/styles';

const theme = createTheme({
 
    palette: {
        mode: 'light',
        primary: {
          main: '#111c24',
          contrastText: '#cafc01',
        },
        secondary: {
          main: '#cafc01',
          contrastText: '#111c24',
        },
        text: {
          primary: '#111c24',
          secondary: '#0b1319',
        },
        background: {
          default: '#f9fafc',
        },
        divider: '#111c24',
      },
      typography: {
        h1: {
          fontFamily: 'DM Mono, monospace',
          fontSize: '6rem',
        },
        h2: {
          fontFamily: 'DM Mono, monospace',
        },
        h3: {
          fontFamily: 'DM Mono, monospace',
        },
        h4: {
          fontFamily: 'DM Mono, monospace',
        },
        h5: {
          fontFamily: 'DM Mono, monospace',
        },
        h6: {
          fontFamily: 'DM Mono, monospace',
        },
        subtitle1: {
          fontFamily: 'DM Mono, monospace',
        },
        button: {
          fontFamily: 'DM Mono, monospace', 
          margin:'8px',
        
          
        },
        overline: {
          fontFamily: 'DM Mono, monospace',
        },
      },
});

export default theme;