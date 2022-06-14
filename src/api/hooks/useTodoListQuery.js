import { useQuery } from 'react-query';
import { queryKeys } from '../queryKeys';
import { todoService } from '../../services/todoService';

export function useTodoListQuery(options) {
  const { isLoading, data } = useQuery(queryKeys.todoList, todoService.getTodoList, {
    ...options,
  });

  return {
    isLoading,
    data,
  };
}
