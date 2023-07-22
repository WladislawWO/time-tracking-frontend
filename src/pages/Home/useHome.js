import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useMain } from '../../contexts/main';
import { timeService } from '../../services/timeService';
import { formatTime, getTimeLabels } from '../../utils';
import { DEFAULT_ADD_TIME } from '../../constants';

export const useHome = () => {
  const [list, setList] = useState([]);
  const { timeList, isLoading, refetchTimeList } = useMain();

  const updateList = (item) => {
    setList(list.map((i) => (i.type === item.type ? { ...i, ...item } : i)));
  };

  const { mutate, isLoading: isLoadingUpdate } = useMutation(timeService.addTime, {
    onSuccess: (res) => {
      const item = res.data;
      updateList(item);
    },
  });

  const {
    mutate: updateStatistics,
    isLoading: isLoadingStatistics,
  } = useMutation(timeService.updateTimeStatistics, {
    onSuccess: refetchTimeList,
  });

  const handleAddTime = (id, name, time) => {
    mutate({ id, time: time + DEFAULT_ADD_TIME, type: name });
  };

  useEffect(() => {
    if (timeList?.data) {
      setList(timeList.data);
    }
  }, [timeList?.data]);

  const total = list.reduce((res, item) => res + item.time, 0);

  return {
    isLoading: isLoading || isLoadingUpdate || isLoadingStatistics,
    list,
    total: formatTime(total),
    totalLabel: getTimeLabels(total),
    handleAddTime,
    updateStatistics,
    updateList,
  };
};
