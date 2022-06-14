import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useGetTimeListQuery } from '../../api/hooks/useGetTimeListQuery';
import { timeService } from '../../services/timeService';
import { formatTime, getTimeLabels } from '../../utils';

export const useHome = () => {
  const [list, setList] = useState([]);
  const { data, isLoading } = useGetTimeListQuery();

  const updateList = (item) => {
    setList(list.map((i) => (i._id === item._id ? item : i)));
  };

  const { mutate, isLoading: isLoadingUpdate } = useMutation(timeService.addTime, {
    onSuccess: (res) => {
      const item = res.data;
      updateList(item);
    },
  });

  const handleAddTime = (_id, time) => {
    mutate({ _id, time });
  };

  useEffect(() => {
    if (data?.data) {
      setList(data.data);
    }
  }, [data?.data]);

  const total = list.reduce((res, item) => res + item.time, 0);

  return {
    isLoading: isLoading || isLoadingUpdate,
    list,
    total: formatTime(total),
    totalLabel: getTimeLabels(total),
    handleAddTime,
    updateList,
  };
};
