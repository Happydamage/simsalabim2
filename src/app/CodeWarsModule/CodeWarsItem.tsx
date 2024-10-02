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

const cnCodeWarsItem = cn('CodeWarsItem');

interface CodeWarsItemProps extends CodeWarsUnitModel {
  className?: string;
}

export const CodeWarsItem: FC<CodeWarsItemProps> = (props) => {
  // const create = async (): Promise<void> => {
  //   await CodeWarsServices.create({});
  // };

  // const getId = async (): Promise<void> => {
  //   const resp = await CodeWarsServices.edit('1');
  //
  //   if (resp) {
  //     setData(resp);
  //   }
  // };

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
          {props.unitId}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginTop={1}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end', marginTop: 'auto' }}>
        <Button size="small" variant="contained">
          Edit
        </Button>
        <Button size="small" variant="outlined">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
