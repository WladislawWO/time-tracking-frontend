import { useQuery } from 'react-query';
import { queryKeys } from '../queryKeys';
import { timeService } from '../../services/timeService';

export function useGetTime(options) {
  const { isLoading, data } = useQuery(queryKeys.time, timeService.getTime, {
    ...options,
  });

  return {
    isLoading,
    data,
  };
}
