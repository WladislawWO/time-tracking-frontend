import React from 'react';
import { ModalWrapper } from '../ModalWrapper';
import st from './styles.module.scss';

export function AddTimeModal({ open, onClose }) {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={st.addTimeModal}>
        hi
      </div>
    </ModalWrapper>
  );
}
