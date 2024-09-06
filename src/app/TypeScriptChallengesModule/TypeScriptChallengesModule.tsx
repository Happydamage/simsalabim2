import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Pick } from './Pick.tsx';

const cnTypeScriptChallengesModule = cn('TypeScriptChallengesModule');

interface TypeScriptChallengesModuleProps {
  className?: string;
}

export const TypeScriptChallengesModule: FC<TypeScriptChallengesModuleProps> = (
  props
) => {
  return (
    <div className={cnTypeScriptChallengesModule(undefined, [props.className])}>
      <Pick />
    </div>
  );
};
