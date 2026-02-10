import React from 'react';

/**
 * Componente de Card de Métricas
 * Exibe uma métrica com ícone, valor, tendência e descrição
 */
const MetricsCard = ({ title, value, trend, trendValue, icon, iconBg, gradient, description }) => {
  return (
    <div className="metrics-card" style={{ '--gradient': gradient }}>
      <div className="metrics-header">
        <div className="metrics-icon" style={{ '--icon-bg': iconBg }}>
          {icon}
        </div>
        <div className={`metrics-trend ${trend}`}>
          {trend === 'positive' ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {trendValue}
        </div>
      </div>
      
      <div className="metrics-content">
        <h3>{title}</h3>
        <div className="metrics-value">{value}</div>
      </div>
      
      <div className="metrics-footer">
        {description}
      </div>
    </div>
  );
};

export default MetricsCard;
