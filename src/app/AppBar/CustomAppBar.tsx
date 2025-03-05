import { FC } from 'react';
import { cn } from '@bem-react/classname';
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../router/routes.ts';
import './CustomAppBar.scss';
import { observer } from 'mobx-react-lite';

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
        </Toolbar>
      </AppBar>
    </Box>
  );
});
