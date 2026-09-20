'use client';

import { useColorScheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

/**
 * Light/dark switch. The app ships light by default (see ThemeProvider), and
 * this flips to dark and back — there is deliberately no "system" option, so
 * the scheme is what the reader chose here rather than what their OS says.
 *
 * The preference persists via MUI's localStorage mechanism (mui-mode key).
 */
export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  // mode is undefined during SSR/first render, and may still read "system"
  // from a preference stored before this control dropped that option; both
  // resolve to light, which is what the server rendered.
  const isDark = mode === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <Tooltip title={label}>
      <IconButton
        size="small"
        color="inherit"
        aria-label={label}
        aria-pressed={isDark}
        onClick={() => setMode(isDark ? 'light' : 'dark')}
      >
        {isDark ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
