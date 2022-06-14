import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { queryKeys } from '../../api/queryKeys';
import { timeService } from '../../services/timeService';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const useTimeDetails = () => {
  const params = useParams();
  const isTotal = params.id === 'total';

  const { isLoading, data, remove } = useQuery(
    queryKeys.total,
    isTotal ? timeService.getTotal : () => timeService.getTime(params.id),
  );

  const res = (isTotal ? data?.data : data?.data?.time) || [];

  const labels = res?.map(({ date }) => {
    const [first, second] = date.split('-');
    return `${first} ${months[second]}`;
  }) || [];

  const values = res?.map((i) => i.time) || [];

  useEffect(() => () => remove(), []);

  return {
    isLoading: isLoading || isLoading,
    title: isTotal ? 'total' : data?.data?.name,
    labels,
    values,
  };
};
