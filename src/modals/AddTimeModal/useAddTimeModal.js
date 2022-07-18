import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useModal } from '../../contexts/modals';
import { timeService } from '../../services/timeService';

export const useAddTimeModal = (updateList, onClose) => {
  const [date, setDate] = useState(false);
  const { data } = useModal();

  const {
    register, trigger, getValues, handleSubmit, setValue: setFormValue,
  } = useForm({ defaultValues: { time: '' }, mode: 'onTouched' });

  const { mutate } = useMutation(timeService.addTime, {
    onSuccess: (res) => {
      const item = res.data;
      updateList(item);
      onClose();
    },
  });

  const onSubmit = () => {
    mutate({ _id: data, time: getValues('time'), date });
  };

  const setTime = (time) => {
    setFormValue('time', time);
    trigger('time');
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [data]);

  return {
    handleSubmit,
    onSubmit,
    register,
    handleChangeDate,
    setTime,
  };
};
