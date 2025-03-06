import { FC } from 'react';
import { cn } from '@bem-react/classname';
import {
  AppBar,
  Box,
  FormControlLabel,
  IconButton,
  Link,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../router/routes.ts';
import './CustomAppBar.scss';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../ColorThemes/ThemeStore/ThemeStore.ts';
import RocketSvg from '../../assets/icons/rocket.svg';
import { SvgIconComponent } from '../Components/SvgIconComponent/SvgIconComponent.tsx';

const cnCustomAppBar = cn('CustomAppBar');

interface CustomAppBarProps {
  className?: string;
}

export const CustomAppBar: FC<CustomAppBarProps> = observer((props) => {
  return (
    <Box
      className={cnCustomAppBar(undefined, [props.className])}
      sx={{ flexGrow: 1 }}
      marginBottom={1}
    >
      <AppBar className={cnCustomAppBar('AppBar')} position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={routes.codeWars.main()} style={{ color: 'white' }}>
              CodeWars
            </Link>
          </Typography>

          <SvgIconComponent icon={<RocketSvg />} />
          <FormControlLabel
            control={
              <Switch
                checked={themeStore.theme === 'dark'}
                onChange={() => themeStore.toggleTheme()}
              />
            }
            label={themeStore.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
});
