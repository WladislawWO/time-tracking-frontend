import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useMain } from '../../contexts/main';
import { timeService } from '../../services/timeService';
import { formatTime, getTimeLabels } from '../../utils';
import { DEFAULT_ADD_TIME } from '../../constants';

export const useHome = () => {
  const [list, setList] = useState([]);
  const { timeList, isLoading } = useMain();
  const total = list.reduce((res, item) => res + item.time, 0);

  const updateList = (item) => {
    setList(list.map((i) => (i.type === item.type ? { ...i, ...item } : i)));
  };

  const { mutate, isLoading: isLoadingUpdate } = useMutation(timeService.addTime, {
    onSuccess: (res) => {
      const item = res.data;
      updateList(item);
    },
  });

  const handleAddTime = (id, name, time) => {
    mutate({
      id, time: time + DEFAULT_ADD_TIME, type: name, total: total + DEFAULT_ADD_TIME,
    });
  };

  useEffect(() => {
    if (timeList?.data) {
      setList(timeList.data);
    }
  }, [timeList?.data]);

  return {
    isLoading: isLoading || isLoadingUpdate,
    list,
    totalRaw: total,
    total: formatTime(total),
    totalLabel: getTimeLabels(total),
    handleAddTime,
    updateList,
  };
};
