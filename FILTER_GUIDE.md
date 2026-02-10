# 📅 Guia do Filtro de Período

## Como Funciona

O Dashboard Analytics agora possui um **filtro de período funcional** que permite alternar entre visualizações de **7 dias** e **30 dias**.

---

## 🎯 Funcionalidades

### ✅ O que acontece ao clicar nos botões:

**Botão "7 dias":**
- Mostra dados da última semana
- Gráficos exibem dias da semana (Seg-Dom)
- Métricas com valores menores e mais recentes
- Badge de crescimento: +12.5%

**Botão "30 dias":**
- Mostra dados do último mês
- Gráficos exibem semanas (Sem 1-4)
- Métricas com valores maiores e acumulados
- Badge de crescimento: +24.8%

---

## 📊 Dados que Mudam

### 1. Cards de Métricas
```
7 DIAS:                    30 DIAS:
Usuários: 24.8K            Usuários: 87.2K
Conversão: 3.24%           Conversão: 4.12%
Receita: R$ 18.5K          Receita: R$ 92.8K
Rejeição: 38.7%            Rejeição: 45.6%
```

### 2. Gráfico de Linha (Crescimento)
```
7 DIAS:                    30 DIAS:
Labels: Seg-Dom            Labels: Sem 1-4
Pontos: 7                  Pontos: 4
Valores: diários           Valores: semanais
```

### 3. Gráfico de Barras (Acessos)
```
7 DIAS:                    30 DIAS:
Labels: Seg-Dom            Labels: Sem 1-4
Barras: 7                  Barras: 4
Granularidade: diária      Granularidade: semanal
```

### 4. Gráfico de Rosca (Fontes)
```
7 DIAS:                    30 DIAS:
Orgânica: 42%              Orgânica: 38%
Direto: 28%                Direto: 32%
Social: 18%                Social: 20%
Refs: 12%                  Refs: 10%
```

---

## 🔧 Como Funciona Tecnicamente

### Estado React
```javascript
const [selectedPeriod, setSelectedPeriod] = useState('7days');
const [currentData, setCurrentData] = useState(data7Days);
```

### Função de Mudança
```javascript
const handlePeriodChange = (period) => {
  setSelectedPeriod(period);
  
  if (period === '7days') {
    setCurrentData(data7Days);
  } else if (period === '30days') {
    setCurrentData(data30Days);
  }
};
```

### Dados Mockados
Os dados estão em `data/mockData.js`:
- `data7Days` - Dados de 7 dias
- `data30Days` - Dados de 30 dias

Cada objeto contém:
```javascript
{
  metrics: [...],      // 4 cards de métricas
  userGrowth: {...},   // Gráfico de linha
  dailyAccess: {...},  // Gráfico de barras
  trafficSource: {...} // Gráfico de rosca
}
```

---

## 🎨 Visual do Filtro

```
┌─────────────────────────────────────────────────────┐
│  📅 Período:  [ 7 dias ]  [ 30 dias ]              │
└─────────────────────────────────────────────────────┘
```

- **Botão ativo**: Azul gradient com brilho
- **Botão hover**: Elevação e borda azul
- **Transição**: Suave (0.3s)
- **Responsivo**: Adapta em mobile

---

## 📱 Comportamento Responsivo

### Desktop (> 768px)
```
[📅 Período:] [7 dias] [30 dias]
```

### Mobile (< 768px)
```
📅 Período:
───────────
[7 dias]
[30 dias]
```

---

## ✨ Animações

Ao mudar o período:
1. **Cards de métricas** fazem fade-in com stagger
2. **Gráficos** re-renderizam com animação
3. **Valores** atualizam instantaneamente
4. **Botão ativo** muda com transição suave

---

## 🚀 Como Adicionar Mais Períodos

### 1. Adicione novos dados em `mockData.js`:
```javascript
export const data90Days = {
  metrics: [...],
  userGrowth: {...},
  dailyAccess: {...},
  trafficSource: {...}
};
```

### 2. Adicione botão em `App.jsx`:
```javascript
<button
  className={`filter-btn ${selectedPeriod === '90days' ? 'active' : ''}`}
  onClick={() => handlePeriodChange('90days')}
>
  90 dias
</button>
```

### 3. Atualize a função `handlePeriodChange`:
```javascript
const handlePeriodChange = (period) => {
  setSelectedPeriod(period);
  
  if (period === '7days') {
    setCurrentData(data7Days);
  } else if (period === '30days') {
    setCurrentData(data30Days);
  } else if (period === '90days') {
    setCurrentData(data90Days);
  }
};
```

---

## 💡 Ideias de Expansão

### Filtros Adicionais Possíveis:
- [ ] **Seletor de data** (calendário)
- [ ] **Comparação** (este mês vs anterior)
- [ ] **Filtro de categoria** (tipo de usuário)
- [ ] **Filtro de região** (Brasil, EUA, etc)
- [ ] **Export de dados** (CSV, PDF)
- [ ] **Refresh automático** (atualizar a cada X segundos)

### Integração com API Real:
```javascript
const handlePeriodChange = async (period) => {
  setSelectedPeriod(period);
  setIsLoading(true);
  
  try {
    const response = await fetch(`/api/analytics?period=${period}`);
    const data = await response.json();
    setCurrentData(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  } finally {
    setIsLoading(false);
  }
};
```

---

## 🎯 Demonstração em Entrevistas

### O que destacar:
1. **Estado React** bem gerenciado
2. **Componentização** reutilizável
3. **Dados mockados** estruturados
4. **UX suave** com animações
5. **Código limpo** e comentado
6. **Escalável** para mais filtros

### Perguntas que você pode responder:
- ✅ "Como você gerencia estado no React?"
- ✅ "Como você otimizaria para muitos dados?"
- ✅ "Como integraria com uma API real?"
- ✅ "Como tornaria isso acessível (a11y)?"

---

## 📚 Código de Referência

### Hook useState
```javascript
const [selectedPeriod, setSelectedPeriod] = useState('7days');
```

### Conditional Rendering
```javascript
{selectedPeriod === '7days' ? 'Últimos 7 dias' : 'Últimas 4 semanas'}
```

### Key Prop (Re-render)
```javascript
<motion.section key={selectedPeriod}>
  {/* componentes aqui re-renderizam ao mudar o período */}
</motion.section>
```

---

**🎉 Agora seu dashboard tem um filtro profissional e funcional!**
