import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { CRAETE_TODO_MODAL } from '../../constants/modals';
import { ModalWrapper } from '../ModalWrapper';
import { useCreateTodoModal } from './useCreateTodoModal';
import st from './styles.module.scss';

export function CraeteTodoModal({
  open, onClose, handleCreate,
}) {
  const {
    handleChange, onSave,
  } = useCreateTodoModal(handleCreate, onClose);

  return (
    <ModalWrapper open={open === CRAETE_TODO_MODAL} onClose={onClose}>
      <div className={st.addTimeModal}>
        <div className={st.header}>
          <div className={st.title}>Create Todo</div>
        </div>
        <Input placeholder="Todo title" onChange={handleChange} />

        <Button styles={st.btn} onClick={onSave}>
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
}
