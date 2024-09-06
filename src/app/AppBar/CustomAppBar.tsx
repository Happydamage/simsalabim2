import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../router/routes.ts';

const cnCustomAppBar = cn('CustomAppBar');

interface CustomAppBarProps {
  className?: string;
}

export const CustomAppBar: FC<CustomAppBarProps> = (props) => {
  return (
    <Box
      className={cnCustomAppBar(undefined, [props.className])}
      sx={{ flexGrow: 1 }}
      marginBottom={1}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/*<Typography variant="h6" color="inherit" component="div">*/}
          {/*  Pew pew*/}
          {/*</Typography>*/}
          {/*<Link*/}
          {/*  href={routes.typeScriptChallenge.main()}*/}
          {/*  style={{ color: 'white', marginRight: '2rem' }}*/}
          {/*>*/}
          {/*  TsChallenge*/}
          {/*</Link>*/}
          <Link href={routes.codeWars.main()} style={{ color: 'white' }}>
            CodeWars
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
