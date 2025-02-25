import { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { SvgIcon } from '@mui/material';

const cnSvgIconComponent = cn('SvgIconComponent');

const SvgIconSizeMap = {
  small: {
    width: 24,
    height: 24,
  },
  medium: {
    width: 40,
    height: 40,
  },
  large: {
    width: 64,
    height: 64,
  },
} as const;

export type SvgIconSize = keyof typeof SvgIconSizeMap;

interface SvgIconComponentProps {
  className?: string;
  icon: ReactNode;
  width?: string | number;
  height?: string | number;
  size?: SvgIconSize;
}

export const SvgIconComponent: FC<SvgIconComponentProps> = (props) => {
  const Sizes = props.size
    ? SvgIconSizeMap[props.size]
    : {
        width: props.width,
        height: props.height,
      };

  return (
    <SvgIcon
      className={cnSvgIconComponent(undefined, [props.className])}
      inheritViewBox={false}
      style={Sizes}
    >
      {props.icon}
    </SvgIcon>
  );
};
