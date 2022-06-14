import { useState } from 'react';

export const useCreateTodoModal = (handleCreate, onClose) => {
  const [value, setValue] = useState(0);

  const onSave = () => {
    handleCreate({ title: value });
    onClose();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    handleChange,
    onSave,
  };
};
