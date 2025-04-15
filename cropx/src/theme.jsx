import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green shade
    },
    secondary: {
      main: '#81C784', // Lighter green for accents
    },
    background: {
      default: '#E8F5E9', // Light green background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E7D32',
      secondary: '#1B5E20',
    },
    error: {
      main: '#D32F2F', // Error color for validation
    },
    success: {
      main: '#388E3C', // Success color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      color: '#2E7D32',
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#388E3C',
          },
          padding: '10px 20px',
          borderRadius: '5px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  spacing: 8, // Default spacing unit
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
