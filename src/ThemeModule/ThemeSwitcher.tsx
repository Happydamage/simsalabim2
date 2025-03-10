import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { FormControlLabel, Switch } from '@mui/material';
import { useThemeContext } from './functions.ts';

const cnThemeSwitcher = cn('ThemeSwitcher');

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <FormControlLabel
      className={cnThemeSwitcher(undefined, [props.className])}
      control={
        <Switch
          checked={theme.palette.mode === 'dark'}
          onChange={toggleTheme}
        />
      }
      label={theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
    />
  );
};
