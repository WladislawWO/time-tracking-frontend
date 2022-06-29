import React from 'react';
import Button from '../../components/Button';
import Datepicker from '../../components/Datepicker';
import Input from '../../components/Input';
import { ModalWrapper } from '../ModalWrapper';
import st from './styles.module.scss';
import { useAddTimeModal } from './useAddTimeModal';

let number = 0;
const timeSnippets = Array.from({ length: 23 }, () => {
  number += 5;
  return number;
});

export function AddTimeModal({
  open, onClose, updateList,
}) {
  const {
    value, handleChange, handleChangeTime, handleChangeDate, setTime,
  } = useAddTimeModal(updateList, onClose);

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={st.addTimeModal}>
        <div className={st.header}>
          <div className={st.title}>Add time</div>
        </div>
        <Input value={value} type="number" onChange={handleChange} label="Time:" />

        <div className={st.timeSnippets}>
          {timeSnippets.map((item) => (
            <div className={st.timeSnippet} onClick={() => setTime(item)} key={item}>
              {item}
            </div>
          ))}
        </div>

        <Datepicker onChange={handleChangeDate} />

        <Button styles={st.btn} onClick={handleChangeTime}>
          Save
        </Button>
      </div>
    </ModalWrapper>
  );
}
