import { FC, useState } from 'react';
import { cn } from '@bem-react/classname';
import { Box, Button, Modal, Typography } from '@mui/material';
import './FirebaseModal.scss';

const cnFirebaseModal = cn('FirebaseModal');

interface FirebaseModalProps {
  className?: string;
}

export const FirebaseModal: FC<FirebaseModalProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={cnFirebaseModal(undefined, [props.className])}>
      <Button onClick={handleOpen} variant={'contained'}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={() => handleOpen()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={cnFirebaseModal('Backdrop')}
      >
        <Box className={cnFirebaseModal('Content')}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
