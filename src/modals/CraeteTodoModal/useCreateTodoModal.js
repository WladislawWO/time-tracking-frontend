import { useState } from 'react';

export const useCreateTodoModal = (handleCreate, onClose) => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const onSave = () => {
    handleCreate({
      title: value,
      todos: todos.filter((i) => !!i).map((i) => ({ title: i, completed: false })),
    });
    setValue('');
    setTodos([]);
    onClose();
  };

  const handleAddSubTodo = () => {
    setTodos([...todos, '']);
  };

  const handleChangeSubTodo = (value, i) => {
    const list = [...todos];
    list[i] = value;
    setTodos(list);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    handleChange,
    onSave,
    handleAddSubTodo,
    handleChangeSubTodo,
    todos,
  };
};
