import React from 'react';
import Button from '../../components/Button';
import { CONFIRM_DELETE_MODAL } from '../../constants/modals';
import { ModalWrapper } from '../ModalWrapper';
import st from './styles.module.scss';

export function ConfirmDeleteModal({
  open, onClose, id,
}) {
  return (
    <ModalWrapper open={open === CONFIRM_DELETE_MODAL} onClose={onClose}>
      <div className={st.addTimeModal}>
        <div className={st.header}>
          <div className={st.title}>A you sure you want to delete this prettie item?</div>
        </div>

        <div className={st.footer}>
          <Button
            styles={st.btn}
            onClick={() => onClose(id)}
            variant="danger"
          >
            yes
          </Button>

          <Button styles={st.btn} variant="secondary" onClick={() => onClose()}>
            no, I missclicked)
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}
