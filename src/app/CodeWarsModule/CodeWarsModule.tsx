import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsList } from './CodeWarsList.tsx';

const cnCodeWarsModule = cn('CodeWarsModule');

interface CodeWarsModuleProps {
  className?: string;
}

export const CodeWarsModule: FC<CodeWarsModuleProps> = (props) => {
  return (
    <div className={cnCodeWarsModule(undefined, [props.className])}>
      <CodeWarsList />
    </div>
  );
};
