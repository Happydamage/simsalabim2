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

  const setData = async (): Promise<void> => {
    await setDoc(doc(citiesRef, 'SF'), {
      name: 'Kirovskoe',
      state: 'Huirovskoe',
      country: 'Russia',
      capital: true,
      population: 300,
      regions: ['west_coast', 'kokojambo'],
    });
    // await setDoc(doc(citiesRef, 'LA'), {
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA',
    //   capital: false,
    //   population: 3900000,
    //   regions: ['west_coast', 'socal'],
    // });
    // await setDoc(doc(citiesRef, 'DC'), {
    //   name: 'Washington, D.C.',
    //   state: null,
    //   country: 'USA',
    //   capital: true,
    //   population: 680000,
    //   regions: ['east_coast'],
    // });
    // await setDoc(doc(citiesRef, 'TOK'), {
    //   name: 'Tokyo',
    //   state: null,
    //   country: 'Japan',
    //   capital: true,
    //   population: 9000000,
    //   regions: ['kanto', 'honshu'],
    // });
    // await setDoc(doc(citiesRef, 'BJ'), {
    //   name: 'Beijing',
    //   state: null,
    //   country: 'China',
    //   capital: true,
    //   population: 21500000,
    //   regions: ['jingjinji', 'hebei'],
    // });
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
      <CodeWarsItem id={'1'} taskData={'pew'} />
      {/*{data.map((el, index) => (*/}
      {/*  <Grid2 key={index + 1}>*/}
      {/*    <CodeWarsItem id={el.id} taskData={el.taskData} />*/}
      {/*  </Grid2>*/}
      {/*))}*/}
      <Button onClick={() => setData()} variant={'contained'}>
        pew
      </Button>
      <div className={cnCodeWarsList('Image')}></div>
    </Grid2>
  );
};
