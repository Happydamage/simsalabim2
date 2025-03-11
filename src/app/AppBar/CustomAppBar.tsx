import { FC } from 'react';
import { cn } from '@bem-react/classname';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../router/routes.ts';
import './CustomAppBar.scss';
import { observer } from 'mobx-react-lite';
import RocketSvg from '../../assets/icons/rocket.svg';
import { SvgIconComponent } from '../Components/SvgIconComponent/SvgIconComponent.tsx';
import { ThemeSwitcher } from '../../ThemeModule/ThemeSwitcher.tsx';

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

          <Stack
            divider={<Divider orientation={'vertical'} flexItem />}
            direction={'row'}
            sx={{ flexGrow: 1 }}
            spacing={2}
          >
            <Link href={routes.home()} display={'flex'}>
              <SvgIconComponent icon={<RocketSvg />} />
            </Link>
            <Link href={routes.codeWars.main()} style={{ color: 'white' }}>
              CodeWars
            </Link>
          </Stack>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
});
