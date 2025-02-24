import { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

const cnIconComponent = cn('IconComponent');

interface IconComponentProps {
  className?: string;
  icon: ReactNode;
}

export const IconComponent: FC<IconComponentProps> = (props) => {
  return (
    <div className={cnIconComponent(undefined, [props.className])}>
      {props.icon}
    </div>
  );
};
