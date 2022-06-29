import React, {
  createContext, useContext, useMemo,
} from 'react';
import { useGetRoutineListQuery } from '../api/hooks/useGetRoutineListQuery';
import { useGetTimeListQuery } from '../api/hooks/useGetTimeListQuery';
import { useTodoListQuery } from '../api/hooks/useTodoListQuery';

const MainContext = createContext({});

export const useMain = () => useContext(MainContext);

function MainProvider({ children }) {
  const { data: timeList, isLoading, refetch: refetchTimeList } = useGetTimeListQuery();
  const { data: routineList, isLoading: isLoadingRoutine } = useGetRoutineListQuery();
  const { data: todoList, isLoading: isLoadingTodo } = useTodoListQuery();

  const value = useMemo(() => ({
    timeList,
    routineList,
    todoList,
    isLoading: isLoading || isLoadingRoutine || isLoadingTodo,
    refetchTimeList,
  }), [isLoading, timeList, isLoadingRoutine, isLoadingTodo, routineList, todoList]);

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainProvider;
