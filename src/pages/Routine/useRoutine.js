import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useMain } from '../../contexts/main';
import { routineService } from '../../services/routineService';

export const useRoutine = () => {
  const [list, setList] = useState([]);
  const { routineList, isLoading } = useMain();
  const { mutate, isLoading: isLoadingUpdate } = useMutation(routineService.completeRoutine);

  const handleCompleted = (_id, completed) => {
    mutate({ _id, completed });
    setList(list.map((i) => (i._id === _id ? { ...i, completed } : i)));
  };

  useEffect(() => {
    if (routineList?.data) {
      setList(routineList.data);
    }
  }, [routineList?.data]);

  return {
    isLoading: isLoading || isLoadingUpdate,
    list,
    handleCompleted,
  };
};
