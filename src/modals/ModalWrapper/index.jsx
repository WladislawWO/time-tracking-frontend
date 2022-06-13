import React, { useRef } from 'react';
import cn from 'classnames';
import st from './styles.module.scss';
import { useHandleClickOutside } from '../../hooks/useHandleClickOutside';
import { ClsoeIcon } from '../../assets/icons';

export function ModalWrapper({
  children, open, styles, modalContentStyles, onClose,
}) {
  const ref = useRef();
  useHandleClickOutside(ref, onClose);

  return (
    <div className={cn(st.modalContainer, styles, { [st.open]: open })}>
      <div className={cn(st.modalContent, modalContentStyles)} ref={ref}>
        <ClsoeIcon className={st.icon} onClick={onClose} />
        {children}
      </div>
    </div>
  );
}
