import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * Componente de Gráfico de Linha
 * Exibe evolução de dados ao longo do tempo
 */
const LineChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(10, 14, 20, 0.95)',
        titleColor: '#e8edf4',
        bodyColor: '#a0aec0',
        borderColor: 'rgba(0, 212, 255, 0.3)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.parsed.y.toLocaleString()} usuários`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: 'Outfit',
            size: 12
          }
        },
        border: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: 'JetBrains Mono',
            size: 12
          },
          callback: function(value) {
            return value.toLocaleString();
          }
        },
        border: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        hitRadius: 30
      }
    }
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Usuários',
        data: data.values,
        borderColor: '#00d4ff',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
          gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
          return gradient;
        },
        borderWidth: 3,
        fill: true,
        pointBackgroundColor: '#00d4ff',
        pointBorderColor: '#0a0e14',
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#00d4ff',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2
      }
    ]
  };

  return (
    <div className="chart-wrapper">
      <Line ref={chartRef} options={options} data={chartData} />
    </div>
  );
};

export default LineChartComponent;
