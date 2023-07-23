import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { queryKeys } from '../../api/queryKeys';
import { timeService } from '../../services/timeService';

export const useTimeDetails = () => {
  const [tab, setTab] = useState(30);
  const params = useParams();
  const isTotal = params.id === 'total';

  const { isLoading, data, remove } = useQuery(
    [queryKeys.total, tab],
    isTotal
      ? () => timeService.getTotal({ dataCount: tab })
      : () => timeService.getTime({ type: params.id, dataCount: tab }),
  );
  const { mutate, isLoading: isLoadingUpdateTime } = useMutation(timeService.updateTimeCategory);

  const { register, handleSubmit, setValue } = useForm();

  const res = data?.data || [];

  const labels = res.map(({ date }) => dayjs(date).format('MM/DD'));

  const values = res.map((i) => i.time);

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
    setTab,
    tab,
    isLoading: isLoading || isLoadingUpdateTime,
    title: isTotal ? 'total' : data?.data?.name,
    labels,
    values,
  };
};
