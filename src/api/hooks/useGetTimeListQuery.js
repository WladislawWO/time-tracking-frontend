import { useQuery } from 'react-query';
import { queryKeys } from '../queryKeys';
import { timeService } from '../../services/timeService';

export function useGetTimeListQuery(options) {
  const { isLoading, data } = useQuery(queryKeys.timeList, timeService.getTimeList, {
    ...options,
  });

  return {
    isLoading,
    data,
  };
}
