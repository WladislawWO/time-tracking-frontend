import { useQuery } from 'react-query';
import { queryKeys } from '../queryKeys';
import { routineService } from '../../services/routineService';

export function useGetRoutineListQuery(options) {
  const { isLoading, data } = useQuery(queryKeys.routineList, routineService.getRoutineList, {
    ...options,
  });

  return {
    isLoading,
    data,
  };
}
