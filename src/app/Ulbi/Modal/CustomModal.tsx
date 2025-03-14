import {
  FC,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import './CustomModal.scss';
import { CustomPortal } from '../../CustomPortal/Portal.tsx';

const cnCustomModal = cn('CustomModal');

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const CustomModal: FC<ModalProps> = (props) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const onContentClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    e?.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (props.onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        props.onClose?.();
        setIsClosing(false);
      }, 300);
    }
  }, [props]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (props.isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [props.isOpen, onKeyDown]);

  const mods: Record<string, boolean | undefined> = {
    open: props.isOpen,
    isClosing: isClosing,
  };

  return (
    <CustomPortal element={document.body}>
      <Box className={cnCustomModal(mods, [props.className])}>
        <Box className={cnCustomModal('Overlay')} onClick={closeHandler}>
          <Box
            onClick={onContentClick}
            className={cnCustomModal('Content')}
            border={'.5rem solid'}
            borderColor={(theme) => theme.palette.primary.main}
            bgcolor={(theme) => theme.palette.secondary.main}
          >
            {props.children}
          </Box>
        </Box>
      </Box>
    </CustomPortal>
  );
};
