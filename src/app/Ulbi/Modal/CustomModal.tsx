import { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import './CustomModal.scss';

const cnCustomModal = cn('CustomModal');

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const mods: Record<string, boolean> = {};

export const CustomModal: FC<ModalProps> = (props) => {
  return (
    <Box className={cnCustomModal(undefined, [props.className])}>
      <Box className={cnCustomModal('Overlay', { open: props.isOpen })}>
        <Box
          className={cnCustomModal('Content')}
          border={'.5rem solid'}
          borderColor={(theme) => theme.palette.primary.main}
          bgcolor={(theme) => theme.palette.secondary.main}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};
