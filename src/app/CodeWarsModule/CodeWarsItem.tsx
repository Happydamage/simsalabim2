import { FC } from 'react';
import { cn } from '@bem-react/classname';
import './styles/CodeWarsItem.scss';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { CodeWarsUnitModel } from './models/CodeWarsModel.ts';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase.ts';
import { CodeWarsConstants } from './constants/constants.ts';
import { getUnitsData } from './functions/functions.ts';

const cnCodeWarsItem = cn('CodeWarsItem');

interface CodeWarsItemProps {
  className?: string;
  unit: CodeWarsUnitModel;
}

export const CodeWarsItem: FC<CodeWarsItemProps> = (props) => {
  const handleDeleteItem = async (
    collectionName: string,
    id: string
  ): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      await getUnitsData();
      console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <Card
      className={cnCodeWarsItem(undefined, [props.className])}
      sx={{
        position: 'relative',
        height: 250,
        width: 250,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
          position="absolute"
          zIndex={0}
          sx={{ opacity: 0.5, right: 8, top: 0 }}
        >
          {props.unit.unitId}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginTop={1}>
          {props.unit.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end', marginTop: 'auto' }}>
        <Button size="small" variant="contained">
          Edit
        </Button>
        <Button
          onClick={() =>
            handleDeleteItem(
              CodeWarsConstants.CollectionNames.codeWars,
              props.unit.unitId
            )
          }
          size="small"
          variant="outlined"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
