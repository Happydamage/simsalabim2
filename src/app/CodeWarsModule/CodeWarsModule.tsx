import { FC, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { CodeWarsList } from './CodeWarsList.tsx';
import { Button, Link } from '@mui/material';
import { routes } from '../router/routes.ts';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';

const cnCodeWarsModule = cn('CodeWarsModule');

interface CodeWarsModuleProps {
  className?: string;
}

export const CodeWarsModule: FC<CodeWarsModuleProps> = (props) => {
  const [data, setData] = useState<CodeWarsUnitModel[]>([]);
  const collectionName = 'codeWars';

  const getUnitData = async (): Promise<void> => {
    const collectionRef = collection(db, collectionName);

    const allDataSnapshot = await getDocs(collectionRef);

    const allData: CodeWarsUnitModel[] = [];

    allDataSnapshot.forEach((doc) => {
      allData.push(doc.data() as CodeWarsUnitModel);
      setData(allData);
    });
  };

  useEffect(() => {
    void getUnitData();
  }, []);

  return (
    <div
      className={cnCodeWarsModule(undefined, [props.className])}
      style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
    >
      <Link href={routes.codeWars.add()}>
        <Button variant={'contained'}>Create Unit</Button>
      </Link>
      <CodeWarsList unitsData={data} />
    </div>
  );
};
