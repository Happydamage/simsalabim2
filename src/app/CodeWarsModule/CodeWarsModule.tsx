import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsList } from './CodeWarsList.tsx';
import { Button, Link } from '@mui/material';
import { routes } from '../router/routes.ts';

const cnCodeWarsModule = cn('CodeWarsModule');

interface CodeWarsModuleProps {
  className?: string;
}

export const CodeWarsModule: FC<CodeWarsModuleProps> = (props) => {
  return (
    <div
      className={cnCodeWarsModule(undefined, [props.className])}
      style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
    >
      <Link href={routes.codeWars.add()}>
        <Button variant={'contained'}>Create Unit</Button>
      </Link>
      <CodeWarsList />
    </div>
  );
};
