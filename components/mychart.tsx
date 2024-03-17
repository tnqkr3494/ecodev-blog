// components/MyLineChart.tsx
"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const MyChart = () => {
  return (
    <div className="h-[20rem] w-[74rem] mt-7">
      <Line
        data={{
          labels: ["begin", "teenage", "adult", "now"],
          datasets: [
            {
              data: [0, 10, 5, 15],
              borderColor: "#F2E9E4",
              borderWidth: 5,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              ticks: {
                color: "#F2E9E4",
                font: {
                  size: 20,
                },
              },
              grid: {
                display: false, // x 축 그리드 숨기기
              },
            },
            y: {
              display: false, // y 축 눈금 숨기기
            },
          },
          plugins: {
            legend: {
              display: false, // 범례 숨기기
            },
          },
        }}
      />
    </div>
  );
};
export default MyChart;
