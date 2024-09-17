import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsItem } from './CodeWarsItem.tsx';
import { CodeWarsModel } from './models/CodeWarsModel.ts';
import './styles/CodeWarsList.scss';
import { Button, Grid2 } from '@mui/material';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';

const cnCodeWarsList = cn('CodeWarsList');

interface CodeWarsListProps {
  className?: string;
}

export const CodeWarsList: FC<CodeWarsListProps> = (props) => {
  // const [data, setData] = useState<CodeWarsModel[]>([]);
  const citiesRef = collection(db, 'cities');
  const docRef = doc(db, 'cities', 'SF');

  const setData = async (): Promise<void> => {
    await setDoc(doc(citiesRef, 'test'), {
      name: 'Kirovskoe',
      state: 'Huirovskoe',
      country: 'Russia',
      capital: true,
      population: 300,
      regions: ['west_coast', 'kokojambo'],
    });
  };

  // useEffect(() => {
  // const getData = async (): Promise<void> => {
  // const resp = await CodeWarsServices.list();
  //
  // if (resp) {
  //   setData(resp);
  // }
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
      <div className={cnCodeWarsList('Image')}></div>
    </Grid2>
  );
};
