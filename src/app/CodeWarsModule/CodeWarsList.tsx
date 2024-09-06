import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import { CodeWarsModel } from './models/CodeWarsModel.ts';
import { CodeWarsServices } from './services/CodeWarsServices.ts';
import './styles/CodeWarsList.scss';
import { Grid2 } from '@mui/material';
const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  const [data, setData] = useState<CodeWarsModel[]>([]);

  // useEffect(() => {
  //   const getData = async (): Promise<void> => {
  //     const resp = await CodeWarsServices.list();
  //
  //     if (resp) {
  //       setData(resp);
  //     }
  //   };
  //
  //   void getData();
  // }, []);
  return (
    <Grid2
      className={cnCodeWarsList(undefined, [props.className])}
      container
      spacing={2}
    >
      {data.map((el, index) => (
        <Grid2 key={index + 1}>
          <CodeWarsItem id={el.id} taskData={el.taskData} />
        </Grid2>
      ))}
      <div className={cnCodeWarsList('Image')}></div>
    </Grid2>
  );
};
