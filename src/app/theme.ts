import { createTheme, PaletteMode } from '@mui/material';

// Função para criar o tema com base no modo (claro/escuro)
export const createAppTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#2563eb', // Azul mais moderno
        light: '#3b82f6',
        dark: '#1d4ed8',
      },
      secondary: {
        main: '#8b5cf6', // Roxo mais suave
        light: '#a78bfa',
        dark: '#7c3aed',
      },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#0f172a',
        paper: mode === 'light' ? '#ffffff' : '#1e293b',
      },
      text: {
        primary: mode === 'light' ? '#1e293b' : '#f1f5f9',
        secondary: mode === 'light' ? '#475569' : '#cbd5e1',
      },
    },
    typography: {
      fontFamily: 'var(--font-geist-sans)',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.025em',
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      button: {
        fontWeight: 500,
        textTransform: 'none',
      },
      body1: {
        lineHeight: 1.7,
      },
      body2: {
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '10px 20px',
            boxShadow: mode === 'light' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            '&:hover': {
              boxShadow: mode === 'light' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
            },
          },
          contained: {
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === 'light' 
              ? '0px 4px 20px rgba(0, 0, 0, 0.08)' 
              : '0px 4px 20px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light'
              ? '0 1px 3px rgba(0,0,0,0.05)'
              : '0 1px 3px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(10px)',
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.8)' 
              : 'rgba(15, 23, 42, 0.8)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
}; 