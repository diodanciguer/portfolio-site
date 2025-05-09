'use client';

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../ThemeContext';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Tooltip title={mode === 'light' ? 'Modo escuro' : 'Modo claro'}>
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
} 