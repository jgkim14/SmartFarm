import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";


// Components import
import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home';
import HomeCamera from './component/homecamera/HomeCamera';
import HomeHistory from './pages/home/HomeHistory';

// Stylesheet import
import './app.css';

function App() {
  const [LatestSensorData, setLatestSensorData] = useState({
    LatestTempData: [],
    LatestHumiData: [],
    LatestGround1Data: [],
    LatestGround2Data: [],
    LatestLedData: [],
    LatestFanData: [],
    LatestPumpData: []
  });

  const [WeekSensorData, setWeekSensorData] = useState({
    weekTempData: [],
    weekHumiData: [],
    weekGround1Data: [],
    weekGround2Data: []
  });

  const [MonthSensorData, setMonthSensorData] = useState({
    monthTempData: [],
    monthHumiData: [],
    monthData: [],
    monthTempData: []
  });

  const [HourSensorData, setHourSensorData] = useState({
    hourTempData: [],
    hourHumiData: [],
    hourData: [],
    hourTempData: []
  });

  const [IdxSensorData, setIdxSensorData] = useState({
    IdxTempData: [],
    IdxHumiData: [],
    IdxData: [],
    IdxTempData: []
  });

  const getWeekOfMonth = (date) => {
    const startWeekDayIndex = 1; // 월요일을 주의 시작으로 설정 (일요일을 시작으로 하려면 0)
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDay = (firstDate.getDay() + 7 - startWeekDayIndex) % 7;
    const dayOfMonth = date.getDate();
  
    return Math.ceil((dayOfMonth + firstDay) / 7);
  };

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    async function fetchSensorData() {

      const now = new Date();
      

      setIsLoading(true); // 데이터를 가져오기 시작할 때 로딩 상태를 true로 설정
      try {
        const response_Latest = await fetch('http://192.168.219.103:8000/api/latest');
        
        const response_Index100 = await fetch('http://192.168.219.103:8000/api/idx100');

        const response_Month = await fetch('http://192.168.219.103:8000/api/month', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            year: now.getFullYear(),
            month: now.getMonth()+1,
          })
        });

        const response_Week = await fetch('http://192.168.219.103:8000/api/week', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            year: now.getFullYear(),
            month: now.getMonth()+1,
            week: getWeekOfMonth(now)
          })
        });

        const response_Hour = await fetch('http://192.168.219.103:8000/api/hourly', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: now.getFullYear()+"-0"+(now.getMonth()+1)+"-"+now.getDate()
          })
        });
  
        const jsonResponse_Latest = await response_Latest.json();
        const jsonResponse_Week = await response_Week.json();
        const jsonResponse_Month = await response_Month.json();
        const jsonResponse_Hour = await response_Hour.json();
        const jsonResponse_Index100 = await response_Index100.json();
        const { Latest_temperature, Latest_humidity, Latest_ground1, Latest_ground2,Latest_led,Latest_sysfan,Latest_wpump } = jsonResponse_Latest;
        
        let weekSensorDataArray = []; // 2차원 배열을 초기화합니다.
        let monthSensorDataArray = [];
        let hourSensorDataArray = [];
        let indexSensorDataArray = [];
  
        for (let i=0;i<jsonResponse_Month.length;i++){
          const tempData = jsonResponse_Month[i].temperature || 0;
          const humiData = jsonResponse_Month[i].humidity || 0;
          const ground1Data = jsonResponse_Month[i].ground1 || 0;
          const ground2Data = jsonResponse_Month[i].ground2 || 0;

          monthSensorDataArray.push({
            monthTempData: tempData,
            monthHumiData: humiData,
            monthGround1Data: ground1Data,
            monthGround2Data: ground2Data
          });
        }

        for (let i = 0; i < jsonResponse_Week.length; i++) {
          const tempData = jsonResponse_Week[i].temperature || 0;
          const humiData = jsonResponse_Week[i].humidity || 0;
          const ground1Data = jsonResponse_Week[i].ground1 || 0;
          const ground2Data = jsonResponse_Week[i].ground2 || 0;
  
          weekSensorDataArray.push({
            weekTempData: tempData,
            weekHumiData: humiData,
            weekGround1Data: ground1Data,
            weekGround2Data: ground2Data
          });
        }

        for (let i = 0; i < jsonResponse_Hour.length; i++) {
          const tempData = jsonResponse_Hour[i].Hourly_temperature || 0;
          const humiData = jsonResponse_Hour[i].Hourly_humidity || 0;
          const ground1Data = jsonResponse_Hour[i].Hourly_ground1 || 0;
          const ground2Data = jsonResponse_Hour[i].Hourly_ground2 || 0;

          hourSensorDataArray.push({
            hourTempData: tempData,
            hourHumiData: humiData,
            hourGround1Data: ground1Data,
            hourGround2Data: ground2Data
          });
        }

        for (let i = 0; i < jsonResponse_Index100.length; i++) {
          const tempData = jsonResponse_Index100[i].Date_temperature || 0;
          const humiData = jsonResponse_Index100[i].Date_humidity || 0;
          const ground1Data = jsonResponse_Index100[i].Date_ground1 || 0;
          const ground2Data = jsonResponse_Index100[i].Date_ground2 || 0;

          indexSensorDataArray.push({
            IdxTempData: tempData,
            IdxHumiData: humiData,
            IdxGround1Data: ground1Data,
            IdxGround2Data: ground2Data
          });
        }

        setLatestSensorData({
          LatestTempData: Latest_temperature,
          LatestHumiData: Latest_humidity,  
          LatestGround1Data: Latest_ground1,
          LatestGround2Data: Latest_ground2,
          LatestLedData : Latest_led,
          LatestFanData : Latest_sysfan,
          LatestPumpData : Latest_wpump
        });

  
        setWeekSensorData(weekSensorDataArray);
        setMonthSensorData(monthSensorDataArray);
        setHourSensorData(hourSensorDataArray);
        setIdxSensorData(indexSensorDataArray);
  
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      } finally {
        setIsLoading(false); // 데이터를 모두 가져온 후에 로딩 상태를 false로 설정
      }
    }
    const intervalId = setInterval(fetchSensorData, 1000); // 5초마다 센서 데이터 갱신

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리

  }, []);

  console.log(IdxSensorData);

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Routes>
            <Route exact path="/" element={<Home LatestData={LatestSensorData} IdxData={IdxSensorData}/>} />
            <Route path="/camera" element={<HomeCamera />} />
            <Route path="history/*" element={<HomeHistory MonthData={MonthSensorData} HourData={HourSensorData} WeekData={WeekSensorData}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
