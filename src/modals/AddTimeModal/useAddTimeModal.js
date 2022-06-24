import { useState } from 'react';
import { useMutation } from 'react-query';
import { useModal } from '../../contexts/modals';
import { timeService } from '../../services/timeService';

export const useAddTimeModal = (updateList, onClose) => {
  const [date, setDate] = useState(false);
  const [value, setValue] = useState(0);
  const { data } = useModal();

  const { mutate } = useMutation(timeService.addTime, {
    onSuccess: (res) => {
      const item = res.data;
      updateList(item);
      onClose();
    },
  });

  const handleChangeTime = () => {
    mutate({ _id: data, time: value, date });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  return {
    handleChange,
    handleChangeTime,
    handleChangeDate,
  };
};
