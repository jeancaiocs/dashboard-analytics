import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * Componente de Gráfico de Barras
 * Exibe comparação de dados em categorias
 */
const BarChartComponent = ({ data }) => {
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
        borderColor: 'rgba(102, 126, 234, 0.3)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.parsed.y.toLocaleString()} acessos`;
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
    }
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Acessos',
        data: data.values,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(102, 126, 234, 0.8)');
          gradient.addColorStop(1, 'rgba(118, 75, 162, 0.8)');
          return gradient;
        },
        borderColor: 'rgba(102, 126, 234, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false
      }
    ]
  };

  return (
    <div className="chart-wrapper">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default BarChartComponent;
