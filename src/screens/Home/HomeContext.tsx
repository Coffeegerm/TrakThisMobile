import React, { createContext, useContext } from 'react';
import { WithChildren } from 'types/WithChildren';

type HomeScreenContextType = {};

const HomeScreenContext = createContext<undefined | HomeScreenContextType>(
  undefined
);

export const useHomeScreen = () => {
  const context = useContext(HomeScreenContext);
  if (!context) {
    throw new Error('useHomeScreen must used within HomeScreenProvider');
  }
  return context;
};

export const HomeScreenProvider = ({ children }: WithChildren) => {
  return (
    <HomeScreenContext.Provider value={{}}>
      {children}
    </HomeScreenContext.Provider>
  );
};
