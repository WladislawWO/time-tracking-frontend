import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ModalWrapper } from '../ModalWrapper';
import st from './styles.module.scss';
import { useAddTimeModal } from './useAddTimeModal';

export function AddTimeModal({
  open, onClose, updateList,
}) {
  const {
    positive, setPositive, handleChange, handleChangeTime,
  } = useAddTimeModal(updateList, onClose);

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={st.addTimeModal}>
        <div className={st.header}>
          <div className={st.title}>Add time</div>
        </div>
        <Input type="number" onChange={handleChange} />

        <Button
          onClick={() => setPositive((value) => !value)}
          styles={st.timeBtn}
          variant={positive ? 'secondary' : 'danger'}
        >
          {positive ? 'Add time' : 'Reduce time'}
        </Button>

        <Button styles={st.btn} onClick={handleChangeTime}>
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
}
