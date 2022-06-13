import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useGetTimeList } from '../../api/hooks/useGetTimeList';
import { timeService } from '../../services/timeService';
import { getTime } from '../../utils';

export const useHome = () => {
  const [list, setList] = useState([]);
  const { data, isLoading } = useGetTimeList();

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

  const total = getTime(list.reduce((res, item) => res + item.time, 0));

  return {
    isLoading: isLoading || isLoadingUpdate,
    list,
    total,
    handleAddTime,
    updateList,
  };
};
