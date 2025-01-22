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
  const [data, setData] = useState<CodeWarsUnitModel[]>([]);

  const getUnitData = async (): Promise<void> => {
    const collectionRef = collection(db, 'codeWars');

    const allDataSnapshot = await getDocs(collectionRef);

    const allData: CodeWarsUnitModel[] = [];

    allDataSnapshot.forEach((doc) => {
      allData.push(doc.data() as CodeWarsUnitModel);
      setData(allData);
    });
    // console.log('forEach', allData);
    // console.log('data', data);
    console.log(allDataSnapshot);
  };

  useEffect(() => {
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
