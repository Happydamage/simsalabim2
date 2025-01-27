import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnCollectionModal = cn('CollectionModal');

interface CollectionModalProps {
  className?: string;
}

export const CollectionModal: FC<CollectionModalProps> = (props) => {
  return (
    <div className={cnCollectionModal(undefined, [props.className])}>
      CollectionModal
    </div>
  );
};
