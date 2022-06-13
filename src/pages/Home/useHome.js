import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useGetTimeList } from '../../api/hooks/useGetTimeList';
import { timeService } from '../../services/timeService';

export const useHome = () => {
  const [list, setList] = useState([]);
  const { data } = useGetTimeList();

  const updateList = (item) => {
    setList(list.map((i) => (i._id === item._id ? item : i)));
  };

  const { mutate } = useMutation(timeService.addTime, {
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

  return {
    list,
    handleAddTime,
    updateList,
  };
};
