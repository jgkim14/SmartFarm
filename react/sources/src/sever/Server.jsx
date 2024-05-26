import React, { useState, useEffect } from 'react';

function SmartFarmComponent() {
  const [sensorData, setSensorData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [humiData, setHumiData] = useState([]);
  const [ground1Data, setGround1Data] = useState([]);
  const [ground2Data, setGround2Data] = useState([]);

  useEffect(() => {
    async function fetchSensorData() {
      try {
        const response = await fetch('http://192.168.219.102:8008/api/latest');
        const jsonResponse = await response.json();
        // 'data' 키 아래 있는 센서 데이터 배열에 접근
        const sensorData = jsonResponse.data;

        setTempData(sensorData[0].temperature);

      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    }
  
    fetchSensorData();
  }, []);
  

  return (
    <div id="sensorData">
        <h3>Sensor ID: {}</h3>
        <p>Temperature: {tempData}</p>
        <p>Humidity: {}%</p>
        <p>Ground1: {}</p>
        <p>Ground2: {}</p>
    </div>
  );
}

export default SmartFarmComponent;
