import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Context 생성
const SeverContext = createContext();

// Provider 컴포넌트
export const SmartFarmProvider = ({ children }) => {
  const [smartFarmData, setSmartFarmData] = useState({});

  useEffect(() => {
    axios.get('http://192.168.219.107:8008/api/')
      .then(response => {
        setSmartFarmData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <SeverContext.Provider value={smartFarmData}>
      {children}
    </SeverContext.Provider>
  );
};

export default SeverContext;
