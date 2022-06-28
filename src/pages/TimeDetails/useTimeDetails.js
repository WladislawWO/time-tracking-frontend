import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
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
  const { mutate, isLoading: isLoadingUpdateTime } = useMutation(timeService.updateTimeCategory);

  const { register, handleSubmit, setValue } = useForm();

  const res = (isTotal ? data?.data : data?.data?.time) || [];

  const labels = res?.map(({ date }) => {
    const [first, second, last] = date.split('-');
    return `${last} ${months[second - 1]}`;
  }) || [];

  const values = res?.map((i) => i.time) || [];

  const onSubmit = ({ minTime }) => {
    mutate({ _id: params.id, minTime });
  };

  useEffect(() => {
    if (data?.data) {
      setValue('minTime', data.data.minTime || 0);
    }
  }, [data?.data]);

  useEffect(() => () => remove(), []);

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading: isLoading || isLoadingUpdateTime,
    title: isTotal ? 'total' : data?.data?.name,
    labels: ['0', '0', ...labels, '0', '0'],
    values: [0, 0, ...values, 0, 0],
  };
};