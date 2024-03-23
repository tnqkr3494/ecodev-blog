"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#d4a373",
        font: {
          size: 15,
        },
      },
    },
  },
};

const labels = [
  "C Programming",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React/Next",
  "CSS Design",
];

interface MajorProps {
  c: number;
  python: number;
  java: number;
  js: number;
  ts: number;
  react: number;
  css: number;
}
export default function MyChart({
  c,
  python,
  java,
  js,
  ts,
  react,
  css,
}: MajorProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "점수",
        data: [c, python, java, js, ts, react, css],
        borderColor: "#d4a373",
        backgroundColor: "#d4a373",
      },
    ],
  };
  return (
    <div className="w-[90vw] max-w-4xl ml-10">
      <Bar options={options} data={data} />
    </div>
  );
}
