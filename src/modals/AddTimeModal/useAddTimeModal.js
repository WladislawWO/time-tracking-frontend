import { useState } from 'react';
import { useMutation } from 'react-query';
import { useModal } from '../../contexts/modals';
import { timeService } from '../../services/timeService';

export const useAddTimeModal = (updateList, onClose) => {
  const [positive, setPositive] = useState(true);
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
    mutate({ _id: data, time: positive ? +value : -value });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    positive,
    setPositive,
    handleChange,
    handleChangeTime,
  };
};
