import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { TextField } from '@mui/material';

const cnCodeWarsAddForm = cn('CodeWarsAddForm');

interface CodeWarsAddFormProps {
  className?: string;
}

export const CodeWarsAddForm: FC<CodeWarsAddFormProps> = (props) => {
  return (
    <div className={cnCodeWarsAddForm(undefined, [props.className])}>
      <TextField variant={'outlined'} />
    </div>
  );
};
