import React from 'react';
import Button from '../../components/Button';
import Datepicker from '../../components/Datepicker';
import Input from '../../components/Input';
import { ModalWrapper } from '../ModalWrapper';
import st from './styles.module.scss';
import { useAddTimeModal } from './useAddTimeModal';

export function AddTimeModal({
  open, onClose, updateList,
}) {
  const {
    handleChange, handleChangeTime, handleChangeDate,
  } = useAddTimeModal(updateList, onClose);

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={st.addTimeModal}>
        <div className={st.header}>
          <div className={st.title}>Add time</div>
        </div>
        <Input type="number" onChange={handleChange} label="Time:" />

        <Datepicker onChange={handleChangeDate} />

        <Button styles={st.btn} onClick={handleChangeTime}>
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
}
