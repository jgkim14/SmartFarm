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
      text: '최근 한달간 통계',
    },
  },
  maintainAspectRatio: false,
};

const labels = Array.from({ length: 31 }, (_, i) => i + 1);

function updateChartData(chart, MonthData) {
  const safeMonthData = Array.isArray(MonthData) ? MonthData : [];
  const tempData = safeMonthData.map(data => data.monthTempData || 0);
  const humiData = safeMonthData.map(data => data.monthHumiData || 0);
  const groundData = safeMonthData.map(data => (data.monthGround1Data + data.monthGround2Data) / 2 || 0);

  chart.data.labels = labels;
  chart.data.datasets[0].data = tempData;
  chart.data.datasets[1].data = humiData;
  chart.data.datasets[2].data = groundData;

  chart.update();
}

export function ChartMonthInfo({ MonthData }) {
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
    updateChartData(chartInstance.current, MonthData);
  }, [MonthData]); // Re-run useEffect when MonthData changes


  console. log(MonthData);
  return <div style={{ height: "28vw", width: "65vw" }}>
    <canvas ref={chartRef}></canvas>
  </div>;
}

export default ChartMonthInfo;
