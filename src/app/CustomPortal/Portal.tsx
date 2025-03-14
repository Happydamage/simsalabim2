import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface CustomPortalProps {
  children: ReactNode;
  element: HTMLElement;
}

export const CustomPortal: FC<CustomPortalProps> = (props) => {
  return createPortal(props.children, props.element);
};
