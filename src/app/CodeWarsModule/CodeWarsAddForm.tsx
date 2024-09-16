import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Button, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';

const cnCodeWarsAddForm = cn('CodeWarsAddForm');

interface CodeWarsAddFormProps {
  className?: string;
}

export const CodeWarsAddForm: FC<CodeWarsAddFormProps> = (props) => {
  const { register, handleSubmit } = useForm<CodeWarsUnitModel>();
  const citiesRef = collection(db, 'cities');
  const docRef = doc(db, 'cities', 'SF');

  const onSubmit: SubmitHandler<CodeWarsUnitModel> = (data) => {
    const setData = async (): Promise<void> => {
      await setDoc(doc(citiesRef, 'test'), {
        data,
      });
    };
  };

  const setData = async (): Promise<void> => {
    await setDoc(doc(citiesRef, 'test1'), {
      name: 'Kirovskoe',
      state: 'Huirovskoe',
      country: 'Russia',
      capital: true,
      population: 300,
      regions: ['west_coast', 'kokojambo'],
    });
  };

  return (
    <form
      className={cnCodeWarsAddForm(undefined, [props.className])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap={1}>
        <TextField {...register('unitId')} variant={'outlined'} label={'№'} />
        <TextField
          {...register('description')}
          variant={'outlined'}
          label={'Description'}
        />
        <TextField
          {...register('solution')}
          variant={'outlined'}
          label={'Solution'}
        />
        <TextField
          {...register('hashtag')}
          variant={'outlined'}
          label={'Hashtag'}
        />
        <Button variant={'contained'} type={'submit'} onClick={() => setData()}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
