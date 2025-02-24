import { FC, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsList } from './CodeWarsList.tsx';
import { Button, Link } from '@mui/material';
import { routes } from '../router/routes.ts';
import { CodeWarsUnitsListStore } from './stores/CodeWarsUnitsListStore.ts';
import { observer } from 'mobx-react-lite';
import { getUnitsData } from './functions/functions.ts';
import { FirebaseModal } from '../FirebaseModal/FirebaseModal.tsx';
import MySvg from '../../assets/icons/startup-rocket-launch-icon.svg';
import { IconComponent } from '../Components/IconComponent/IconComponent.tsx';

const cnCodeWarsModule = cn('CodeWarsModule');

interface CodeWarsModuleProps {
  className?: string;
}

const IconSizesMap = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 36,
    height: 36,
  },
  lg: {
    width: 48,
    height: 48,
  },
} as const;

export type IconSizes = keyof typeof IconSizesMap;

export const CodeWarsModule: FC<CodeWarsModuleProps> = observer((props) => {
  useEffect(() => {
    void getUnitsData();
  }, []);

  return (
    <div
      className={cnCodeWarsModule(undefined, [props.className])}
      style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
    >
      <FirebaseModal />
      <Link href={routes.codeWars.add()}>
        <Button variant={'contained'}>Create Unit</Button>
      </Link>
      <CodeWarsList unitsData={CodeWarsUnitsListStore.data} />
      <IconComponent icon={<MySvg />} />
    </div>
  );
});
