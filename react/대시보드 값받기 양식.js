


//대시보드
const socket = new WebSocket('ws://localhost:8765');

socket.addEventListener('message', function (event) {
    console.log(event.data);//1분마다 들어온 json을 로그로 출력
});












//각자받기
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [temp, setTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [soil1, setSoil1] = useState([]);
  const [soil2, setSoil2] = useState([]);

  useEffect(() => {
    getTemp();
    getHumidity();
    getSoil1();
    getSoil2();
  }, []);

  const getTemp = async () => {
    const response = await axios.get('/server/temp');
    setTemp(response.data.temp);
  };

  const getHumidity = async () => {
    const response = await axios.get('/server/humidity');
    setHumidity(response.data.humidity);
  };

  const getSoil1 = async () => {
    const response = await axios.get('/server/soil_1');
    setSoil1(response.data.soil_1);
  };

  const getSoil2 = async () => {
    const response = await axios.get('/server/soil_2');
    setSoil2(response.data.soil_2);
  };

  return (
    <div>
      <h1>서버 데이터</h1>
      <div>
        <h2>온도</h2>
        {temp.map((t, index) => (
          <p key={index}>{t}</p>
        ))}
      </div>
      <div>
        <h2>습도</h2>
        {humidity.map((h, index) => (
          <p key={index}>{h}</p>
        ))}
      </div>
      <div>
        <h2>토양 센서 1</h2>
        {soil1.map((s1, index) => (
          <p key={index}>{s1}</p>
        ))}
      </div>
      <div>
        <h2>토양 센서 2</h2>
        {soil2.map((s2, index) => (
          <p key={index}>{s2}</p>
        ))}
      </div>
    </div>
  );
}

export default App;