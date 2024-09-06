import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnCodeWarsEditForm = cn('CodeWarsEditForm');

interface CodeWarsEditFormProps {
  className?: string;
}

export const CodeWarsEditForm: FC<CodeWarsEditFormProps> = (props) => {
  return (
    <div className={cnCodeWarsEditForm(undefined, [props.className])}></div>
  );
};
