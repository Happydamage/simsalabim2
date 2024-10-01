import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import './styles/CodeWarsList.scss';
import { Grid2 } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  const unitRef = doc(db, 'codeWars', '333');

  useEffect(() => {
    const getUnitData = async (): Promise<void> => {
      const unitSnap = await getDoc(unitRef);
      console.log(unitSnap);

      if (unitSnap.exists()) {
        console.log('unitData:', unitSnap.data());
      } else {
        console.log('noooooo');
      }
    };

    void getUnitData();
  }, [unitRef]);

  return (
    <Grid2
      className={cnCodeWarsList(undefined, [props.className])}
      container
      spacing={2}
    >
      <CodeWarsItem
        unitId={'1'}
        description={'Pew pew pew'}
        solution={'Qwerty qwerty qwerty'}
        hashtag={'array'}
      />
      {/*{data.map((el, index) => (*/}
      {/*  <Grid2 key={index + 1}>*/}
      {/*    <CodeWarsItem id={el.id} taskData={el.taskData} />*/}
      {/*  </Grid2>*/}
      {/*))}*/}
    </Grid2>
  );
};
