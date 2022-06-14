import { useQuery } from 'react-query';
import { queryKeys } from '../queryKeys';
import { routineService } from '../../services/routineService';

export function useGetRoutineQuery(id, options) {
  const { isLoading, data } = useQuery(
    queryKeys.routine,
    () => routineService.getRoutine(id),
    {
      ...options,
    },
  );

  return {
    isLoading,
    data,
  };
}
