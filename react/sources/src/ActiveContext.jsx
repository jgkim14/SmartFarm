import React, { createContext, useContext, useState } from 'react';

import Home from './pages/home/Home';
import HomeCamera from './pages/home/HomeCamera';
import HomeHistory from './pages/home/HomeHistory';


const ActivePageContext = createContext();

export const useActivePage = () => useContext(ActivePageContext);

export const ActiveContext = ({ children }) => {
  const [activePage, setActivePage] = useState('DASHBOARD');

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {Home},{HomeCamera},{HomeHistory}
    </ActivePageContext.Provider>
  );
};
