import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useTodoListQuery } from '../../api/hooks/useTodoListQuery';
import { todoService } from '../../services/todoService';

export const useTodo = () => {
  const [list, setList] = useState([]);
  const { data, isLoading } = useTodoListQuery();
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

  const handleCreate = ({
    title, todos,
  }) => {
    create({ title });
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    setList(list.filter((i) => i._id !== id));
  };

  useEffect(() => {
    if (data?.data) {
      setList(data.data);
    }
  }, [data?.data]);

  return {
    isLoading: isLoading || isLoadingUpdate || isLoadingCreate || isLoadingDelete,
    list,
    handleDelete,
    handleEdit,
    handleCreate,
  };
};
