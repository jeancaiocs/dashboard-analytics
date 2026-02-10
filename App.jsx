import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MetricsCard from './components/MetricsCard';
import LineChartComponent from './components/LineChartComponent';
import BarChartComponent from './components/BarChartComponent';
import DoughnutChartComponent from './components/DoughnutChartComponent';
import { data7Days, data30Days } from './data/mockData';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('7days'); // Estado do filtro
  const [currentData, setCurrentData] = useState(data7Days); // Dados atuais

  useEffect(() => {
    // Simula carregamento de dados
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  // Função para mudar o período
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    
    // Atualiza os dados baseado no período selecionado
    if (period === '7days') {
      setCurrentData(data7Days);
    } else if (period === '30days') {
      setCurrentData(data30Days);
    }
  };

  // Animação dos containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Carregando Analytics...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="brand">
            <div className="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
              </svg>
            </div>
            <h1>Analytics <span className="highlight">Pro</span></h1>
          </div>
          <div className="header-actions">
            <button className="btn-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
              </svg>
            </button>
            <button className="btn-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <div className="container">
        {/* Filtro de Período */}
        <motion.section
          className="period-filter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="filter-container">
            <div className="filter-label">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Período:</span>
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${selectedPeriod === '7days' ? 'active' : ''}`}
                onClick={() => handlePeriodChange('7days')}
              >
                <span className="filter-btn-text">7 dias</span>
              </button>
              <button
                className={`filter-btn ${selectedPeriod === '30days' ? 'active' : ''}`}
                onClick={() => handlePeriodChange('30days')}
              >
                <span className="filter-btn-text">30 dias</span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Metrics Grid */}
        <motion.section 
          className="metrics-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedPeriod} // Re-anima quando muda o período
        >
          {currentData.metrics.map((metric, index) => (
            <motion.div key={metric.id} variants={itemVariants}>
              <MetricsCard {...metric} />
            </motion.div>
          ))}
        </motion.section>

        {/* Charts Grid */}
        <motion.section 
          className="charts-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`charts-${selectedPeriod}`} // Re-anima os gráficos
        >
          <motion.div variants={itemVariants} className="chart-container large">
            <div className="chart-header">
              <div>
                <h3>Crescimento de Usuários</h3>
                <p className="chart-subtitle">
                  {selectedPeriod === '7days' ? 'Últimos 7 dias' : 'Últimas 4 semanas'}
                </p>
              </div>
              <div className="chart-badge positive">
                {selectedPeriod === '7days' ? '+12.5%' : '+24.8%'}
              </div>
            </div>
            <LineChartComponent data={currentData.userGrowth} />
          </motion.div>

          <motion.div variants={itemVariants} className="chart-container">
            <div className="chart-header">
              <div>
                <h3>Acessos Diários</h3>
                <p className="chart-subtitle">
                  {selectedPeriod === '7days' ? 'Esta semana' : 'Este mês'}
                </p>
              </div>
              <div className="chart-badge neutral">
                {selectedPeriod === '7days' ? '7 dias' : '30 dias'}
              </div>
            </div>
            <BarChartComponent data={currentData.dailyAccess} />
          </motion.div>

          <motion.div variants={itemVariants} className="chart-container">
            <div className="chart-header">
              <div>
                <h3>Fontes de Tráfego</h3>
                <p className="chart-subtitle">Distribuição atual</p>
              </div>
              <div className="chart-badge info">Total</div>
            </div>
            <DoughnutChartComponent data={currentData.trafficSource} />
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>Dashboard Analytics Pro © 2024 • Desenvolvido para portfólio</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
