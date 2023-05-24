import React, { ReactNode ,useState,useEffect,useCallback,useMemo} from 'react';
import { Modal, ModalProps } from 'antd';

type Props = {
  children?: ReactNode;
  className?: string;
} & ModalProps;

const MyComponent: React.FC<Props> = ({ children, className, ...ages }) => {
  return (
    <Modal className={className} {...ages}>
      {children}
    </Modal>
  );
};

export default MyComponent;
