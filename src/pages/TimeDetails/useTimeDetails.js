import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, setValue } = useForm();

  const res = (isTotal ? data?.data : data?.data?.time) || [];

  const labels = res?.map(({ date }) => {
    const [first, second] = date.split('-');
    return `${first} ${months[second]}`;
  }) || [];

  const values = res?.map((i) => i.time) || [];

  useEffect(() => {
    if (data?.data) {
      setValue('minTime', data.data.minTime || 0);
    }
  }, [data?.data]);

  useEffect(() => () => remove(), []);

  return {
    register,
    handleSubmit,
    isLoading: isLoading || isLoading,
    title: isTotal ? 'total' : data?.data?.name,
    labels: ['0', '0', ...labels, '0', '0'],
    values: [0, 0, ...values, 0, 0],
  };
};
