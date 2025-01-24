import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import './styles/CodeWarsList.scss';
import { Grid2 } from '@mui/material';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import { observer } from 'mobx-react-lite';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
  unitsData: CodeWarsUnitModel[];
}

export const CodeWarsList: FC<CodeWarsListProps> = observer((props) => {
  return (
    <Grid2
      className={cnCodeWarsList(undefined, [props.className])}
      container
      spacing={2}
    >
      {props.unitsData.map((unit, index) => (
        <Grid2 key={index + 1}>
          <CodeWarsItem unit={unit} />
        </Grid2>
      ))}
    </Grid2>
  );
});
