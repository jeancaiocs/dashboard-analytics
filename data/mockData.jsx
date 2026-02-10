import React from 'react';

/**
 * Dados Mockados para o Dashboard Analytics
 * Todos os dados são fictícios e criados para demonstração
 */

// Ícones SVG para as métricas
export const Icons = {
  Users: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  TrendingUp: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  DollarSign: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Activity: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// ========== DADOS PARA DIFERENTES PERÍODOS ==========

// Dados para 7 dias
export const data7Days = {
  metrics: [
    {
      id: 1,
      title: 'Usuários Ativos',
      value: '24.8K',
      trend: 'positive',
      trendValue: '+12.5%',
      icon: Icons.Users,
      iconBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      description: 'Últimos 7 dias'
    },
    {
      id: 2,
      title: 'Taxa de Conversão',
      value: '3.24%',
      trend: 'positive',
      trendValue: '+2.1%',
      icon: Icons.TrendingUp,
      iconBg: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
      gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 102, 255, 0.1) 100%)',
      description: 'Vs. semana anterior'
    },
    {
      id: 3,
      title: 'Receita Total',
      value: 'R$ 18.5K',
      trend: 'positive',
      trendValue: '+8.3%',
      icon: Icons.DollarSign,
      iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
      description: 'Esta semana'
    },
    {
      id: 4,
      title: 'Taxa de Rejeição',
      value: '38.7%',
      trend: 'positive',
      trendValue: '-3.2%',
      icon: Icons.Activity,
      iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)',
      description: 'Média da semana'
    }
  ],
  userGrowth: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    values: [12500, 15800, 14200, 18900, 21400, 23100, 24800]
  },
  dailyAccess: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    values: [4200, 5800, 5100, 6800, 7200, 6500, 5900]
  },
  trafficSource: {
    labels: ['Busca Orgânica', 'Direto', 'Social Media', 'Referências'],
    values: [42, 28, 18, 12]
  }
};

// Dados para 30 dias
export const data30Days = {
  metrics: [
    {
      id: 1,
      title: 'Usuários Ativos',
      value: '87.2K',
      trend: 'positive',
      trendValue: '+24.8%',
      icon: Icons.Users,
      iconBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      description: 'Últimos 30 dias'
    },
    {
      id: 2,
      title: 'Taxa de Conversão',
      value: '4.12%',
      trend: 'positive',
      trendValue: '+5.7%',
      icon: Icons.TrendingUp,
      iconBg: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
      gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 102, 255, 0.1) 100%)',
      description: 'Vs. mês anterior'
    },
    {
      id: 3,
      title: 'Receita Total',
      value: 'R$ 92.8K',
      trend: 'positive',
      trendValue: '+32.4%',
      icon: Icons.DollarSign,
      iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
      description: 'Este mês'
    },
    {
      id: 4,
      title: 'Taxa de Rejeição',
      value: '45.6%',
      trend: 'negative',
      trendValue: '+2.8%',
      icon: Icons.Activity,
      iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)',
      description: 'Média do mês'
    }
  ],
  userGrowth: {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    values: [65000, 72500, 79800, 87200]
  },
  dailyAccess: {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    values: [28500, 31200, 29800, 33400]
  },
  trafficSource: {
    labels: ['Busca Orgânica', 'Direto', 'Social Media', 'Referências'],
    values: [38, 32, 20, 10]
  }
};

// Exporta dados iniciais (7 dias como padrão)
export const metricsData = data7Days.metrics;
export const userGrowthData = data7Days.userGrowth;
export const dailyAccessData = data7Days.dailyAccess;
export const trafficSourceData = data7Days.trafficSource;
