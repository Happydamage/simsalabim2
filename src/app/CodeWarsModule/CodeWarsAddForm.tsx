import { FC, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { Button, Stack, TextareaAutosize, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';

const cnCodeWarsAddForm = cn('CodeWarsAddForm');

interface CodeWarsAddFormProps {
  className?: string;
  onReset?: () => void;
}

export const CodeWarsAddForm: FC<CodeWarsAddFormProps> = (props) => {
  const codeWarsRef = collection(db, 'codeWars');

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<CodeWarsUnitModel>({
    defaultValues: { unitId: '', description: '', solution: '', hashtag: '' },
  });

  const onSubmit = handleSubmit(async (data): Promise<void> => {
    await setDoc(doc(codeWarsRef, data.unitId), {
      unitID: data.unitId,
      description: data.description,
      solution: data.solution,
      hashtag: data.hashtag,
    });
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <form
      className={cnCodeWarsAddForm(undefined, [props.className])}
      onSubmit={onSubmit}
      onReset={props.onReset}
    >
      <Stack gap={1}>
        <TextField {...register('unitId')} variant={'outlined'} label={'№'} />
        <TextareaAutosize
          placeholder={'Description'}
          {...register('description')}
          style={{ minHeight: 100 }}
        />
        <TextareaAutosize
          placeholder={'Solution'}
          {...register('solution')}
          style={{ minHeight: 100 }}
        />
        <TextField
          {...register('hashtag')}
          variant={'outlined'}
          label={'Hashtag'}
        />
        <Button variant={'contained'} type={'submit'}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
