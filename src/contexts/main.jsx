import React, {
  createContext, useContext, useMemo,
} from 'react';
import { useGetTimeListQuery } from '../api/hooks/useGetTimeListQuery';

const MainContext = createContext({});

export const useMain = () => useContext(MainContext);

function MainProvider({ children }) {
  const { data: timeList, isLoading, refetch: refetchTimeList } = useGetTimeListQuery();

  const value = useMemo(() => ({
    timeList,
    isLoading,
    refetchTimeList,
  }), [isLoading, timeList]);

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default MainProvider;
