import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useMain } from '../../contexts/main';
import { todoService } from '../../services/todoService';

export const useTodo = (onClose) => {
  const [open, setOpen] = useState(null);
  const [list, setList] = useState([]);
  const { todoList, isLoading } = useMain();
  const { mutate: create, isLoading: isLoadingCreate } = useMutation(
    todoService.createTodo,
    {
      onSuccess: (res) => {
        setList([res.data, ...list]);
      },
    },
  );
  const { mutate: update, isLoading: isLoadingUpdate } = useMutation(todoService.updateTodo);
  const { mutate: deleteTodo, isLoading: isLoadingDelete } = useMutation(todoService.deleteTodo);

  const handleEdit = ({
    _id, title, todos, completed,
  }) => {
    update({ _id, completed });
    setList(list.map((i) => (i._id === _id ? { ...i, completed } : i)));
  };

  const handleEditSubTodo = ({ i, completed, _id }) => {
    const { todos } = list.find((i) => i._id === _id);
    const newTodos = [...todos];
    newTodos[i] = { ...newTodos[i], completed };
    update({ _id, todos: newTodos });
  };

  const handleCreate = ({
    title, todos,
  }) => {
    create({ title, todos });
  };

  const handleDelete = (id) => {
    if (id) {
      deleteTodo(id);
      setList(list.filter((i) => i._id !== id));
    }
    onClose();
  };

  const toggleOpen = (id) => {
    if (id === open) setOpen(null);
    else setOpen(id);
  };

  useEffect(() => {
    if (todoList?.data) {
      setList(todoList.data);
    }
  }, [todoList?.data]);

  return {
    isLoading: isLoading || isLoadingUpdate || isLoadingCreate || isLoadingDelete,
    list,
    open,
    toggleOpen,
    handleEditSubTodo,
    handleDelete,
    handleEdit,
    handleCreate,
  };
};
