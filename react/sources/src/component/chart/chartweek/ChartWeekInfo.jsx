
import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement, BarController, LineController } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarController,
  LineController
);


const options = {
  responsive: true,
  layout: {
    padding: {
      top: 1,
      right: 0,
      bottom: 0,
      left: 40
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,

      text: '최근 일주일 통계',
    },
  },
  maintainAspectRatio: false,
};

const labels = ['월', '화', '수', '목', '금', '토', '일'];

function updateChartData(chart, WeekData) {
  const safeWeekData = Array.isArray(WeekData) ? WeekData : [];
  const tempData = safeWeekData.map(data => data.weekTempData || 0);
  const humiData = safeWeekData.map(data => data.weekHumiData || 0);
  const groundData = safeWeekData.map(data => (data.weekGround1Data + data.weekGround2Data) / 2 || 0);

  chart.data.labels = labels;
  chart.data.datasets[0].data = tempData;
  chart.data.datasets[1].data = humiData;
  chart.data.datasets[2].data = groundData;

  chart.update();
}

export function ChartWeekInfo({ WeekData }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartInstance.current) {
      chartInstance.current = new ChartJS(chartRef.current, {
        type: 'bar', // Default type is 'bar', but it can be changed as needed.
        options: options,
        data: {
          labels,
          datasets: [
            {
              type: 'line',
              label: '온도',
              backgroundColor: 'rgb(25, 150, 200)',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 2,
              fill: false,
              data: [],
            },
            {
              type: 'line',
              label: '습도',
              backgroundColor: 'rgb(25, 150, 200)',
              borderColor: 'rgb(70, 110, 244)',
              borderWidth: 2,
              fill: false,
              data: [],
            },
            {
              type: 'line',
              label: '토양습도1,2',
              backgroundColor: 'rgb(31, 77, 170)',
              borderColor: 'rgb(31, 77, 170)',
              borderWidth: 2,
              fill: false,
              data: [],
            },
          ],
        },
      });
    }

    // Update chart data
    updateChartData(chartInstance.current, WeekData);
  }, [WeekData]); // Re-run useEffect when WeekData changes

  return <div style={{ height: "28vw", width: "65vw" }}>
    <canvas ref={chartRef}></canvas>
  </div>;
}

export default ChartWeekInfo;
