import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import {
  Autocomplete,
  AutocompleteChangeReason,
  Button,
  Stack,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';
import { HashtagLabels, top100Films } from '../../constants/constants.ts';

const cnCodeWarsAddForm = cn('CodeWarsAddForm');

interface Option {
  title: string;
  year: number;
}

interface MultipleAutocompleteProps {
  options: Option[];
  title: string;
  year: number;
}

interface CodeWarsAddFormProps {
  className?: string;
  MultipleAutocompleteProps: MultipleAutocompleteProps;
}
export const CodeWarsAddForm: FC<CodeWarsAddFormProps> = (props) => {
  const codeWarsRef = collection(db, 'codeWars');
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm<CodeWarsUnitModel>({
    defaultValues: { unitId: '', description: '', solution: '', hashtag: '' },
  });

  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  const handleSelect = (
    event: React.ChangeEvent<unknown>,
    newValue: Option[]
  ) => {
    setSelectedValues(newValue);
  };

  const onSubmit = handleSubmit(async (data): Promise<void> => {
    console.log(data.hashtag);
    console.log(data.unitId);
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
    >
      <Stack gap={1}>
        <TextField
          required
          {...register('unitId')}
          variant={'outlined'}
          label={'№'}
        />
        <TextareaAutosize
          required
          placeholder={'Description'}
          {...register('description')}
          style={{ minHeight: 100 }}
        />
        <TextareaAutosize
          required
          placeholder={'Solution'}
          {...register('solution')}
          style={{ minHeight: 100 }}
        />
        <Autocomplete
          options={HashtagLabels}
          getOptionLabel={(option) => option.id}
          renderInput={(params) => (
            <TextField
              required
              {...register('hashtag')}
              {...params}
              label={'Hashtag'}
            />
          )}
        />
        <Button variant={'contained'} type={'submit'}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
