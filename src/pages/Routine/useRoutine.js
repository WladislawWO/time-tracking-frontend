import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useGetRoutineListQuery } from '../../api/hooks/useGetRoutineListQuery';
import { routineService } from '../../services/routineService';

export const useRoutine = () => {
  const [list, setList] = useState([]);
  const { data, isLoading } = useGetRoutineListQuery();
  const { mutate, isLoading: isLoadingUpdate } = useMutation(routineService.completeRoutine);

  const handleCompleted = (_id, completed) => {
    mutate({ _id, completed });
    setList(list.map((i) => (i._id === _id ? { ...i, completed } : i)));
  };

  useEffect(() => {
    if (data?.data) {
      setList(data.data);
    }
  }, [data?.data]);

  return {
    isLoading: isLoading || isLoadingUpdate,
    list,
    handleCompleted,
  };
};
