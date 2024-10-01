import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import './styles/CodeWarsList.scss';
import { Grid2 } from '@mui/material';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  const [unitListData, setUnitListData] = useState<CodeWarsUnitModel[] | null>(
    null
  );
  // const unitRef = doc(db, 'codeWars', '333');

  useEffect(() => {
    const getUnitData = async (): Promise<void> => {
      const unitsList = await getDocs(collection(db, 'codeWars'));
      // const unitSnap = await getDoc(unitRef);

      unitsList.forEach((unit) => {
        console.log(unit.data());
      });

      // if (unitSnap.exists()) {
      //   console.log('unitData:', unitSnap.data());
      // } else {
      //   console.log('noooooo');
      // }
    };

    void getUnitData();
  }, []);

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
