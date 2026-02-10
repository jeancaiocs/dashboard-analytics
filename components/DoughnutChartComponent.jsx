import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registrar componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Componente de Gráfico de Rosca (Doughnut)
 * Exibe distribuição percentual de dados
 */
const DoughnutChartComponent = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#a0aec0',
          font: {
            family: 'Outfit',
            size: 13
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(10, 14, 20, 0.95)',
        titleColor: '#e8edf4',
        bodyColor: '#a0aec0',
        borderColor: 'rgba(0, 212, 255, 0.3)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${percentage}%`;
          }
        }
      }
    },
    cutout: '65%',
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          'rgba(0, 212, 255, 0.8)',
          'rgba(102, 126, 234, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
        borderColor: [
          '#00d4ff',
          '#667eea',
          '#10b981',
          '#f59e0b'
        ],
        borderWidth: 2,
        hoverOffset: 8
      }
    ]
  };

  return (
    <div className="chart-wrapper">
      <Doughnut options={options} data={chartData} />
    </div>
  );
};

export default DoughnutChartComponent;
