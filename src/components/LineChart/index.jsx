import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  layout: {
    padding: 25,
  },
  scales: {
    y: {
      min: 0,
      ticks: { color: 'rgb(255, 255, 255, 0.7)' },
      grid: {
        color: 'rgb(255, 255, 255, 0.5)',
      },
    },
    x: {
      ticks: { color: 'rgb(255, 255, 255, 0.7)' },
      grid: {
        color: 'rgb(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export default function LineChart({
  bgColor, gradient, labels, values,
}) {
  const plugin = useMemo(() => ({
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      const gradientBack = ctx.createLinearGradient(0, 0, 90, 250);
      gradientBack.addColorStop(0, gradient[0]);
      gradientBack.addColorStop(1, gradient[1]);
      ctx.fillStyle = gradientBack;
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  }), [bgColor, gradient]);

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: values,
        color: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  }), [labels, values]);

  return (
    <Line options={options} data={data} plugins={[plugin]} />
  );
}
