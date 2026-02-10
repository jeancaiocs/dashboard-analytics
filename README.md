# 📊 Dashboard Analytics Pro

Um dashboard moderno e interativo de analytics desenvolvido com React, Chart.js e Framer Motion. Projeto criado para demonstrar habilidades em desenvolvimento frontend e design de interfaces profissionais.

![Dashboard Analytics](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4.1-ff6384?logo=chart.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.3-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Características

- 🎨 **Design Moderno**: Interface dark com efeito glassmorphism e gradientes suaves
- 📈 **Gráficos Interativos**: Visualizações criadas com Chart.js
- 🎭 **Animações Fluidas**: Transições suaves usando Framer Motion
- 📱 **Totalmente Responsivo**: Layout adaptável para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Construído com Vite para carregamento rápido
- 🧩 **Componentizado**: Arquitetura modular e reutilizável
- 💅 **CSS Personalizado**: Estilização profissional sem frameworks CSS pesados
- 🔄 **Filtro de Período**: Alterne entre visualizações de 7 e 30 dias com um clique

## 🚀 Tecnologias Utilizadas

### Core
- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **JavaScript (ES6+)** - Linguagem de programação moderna
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com variáveis e animações

### Bibliotecas
- **Chart.js 4.4.1** - Biblioteca para criação de gráficos
- **react-chartjs-2 5.2.0** - Wrapper React para Chart.js
- **Framer Motion 11.0.3** - Biblioteca de animações para React

### Ferramentas de Desenvolvimento
- **Vite 5.1.0** - Build tool e dev server ultrarrápido
- **ESLint** - Linter para garantir qualidade de código

## 📊 Funcionalidades

### Filtro de Período Interativo
- **Botão 7 dias**: Visualiza dados da última semana
- **Botão 30 dias**: Visualiza dados do último mês
- Atualização instantânea de métricas e gráficos
- Animações suaves na transição

### Métricas Resumidas
- **Usuários Ativos**: Contador de usuários com tendência
- **Taxa de Conversão**: Percentual de conversão do funil
- **Receita Total**: Valor total em vendas
- **Taxa de Rejeição**: Métrica de bounce rate

### Gráficos
1. **Gráfico de Linha**: Crescimento de usuários ao longo do período selecionado
2. **Gráfico de Barras**: Acessos no período escolhido
3. **Gráfico de Rosca**: Distribuição de fontes de tráfego

## 🎯 Estrutura do Projeto

```
dashboard-analytics/
├── components/              # Componentes React
│   ├── MetricsCard.jsx     # Card de métricas
│   ├── LineChartComponent.jsx    # Gráfico de linha
│   ├── BarChartComponent.jsx     # Gráfico de barras
│   └── DoughnutChartComponent.jsx # Gráfico de rosca
├── data/
│   └── mockData.js         # Dados simulados (7 e 30 dias)
├── App.jsx                 # Componente principal (com filtro)
├── App.css                 # Estilos globais
├── main.jsx                # Ponto de entrada React
├── index.html              # HTML principal
├── vite.config.js          # Configuração Vite
├── package.json            # Dependências
├── README.md               # Documentação principal
├── FILTER_GUIDE.md         # Guia do sistema de filtros
└── QUICK_START.md          # Guia rápido
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/dashboard-analytics.git
cd dashboard-analytics
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

```bash
npm run preview
# ou
yarn preview
```

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--bg-primary: #0a0e14       /* Fundo escuro principal */
--bg-secondary: #141922     /* Fundo secundário */
--accent-primary: #00d4ff   /* Azul ciano */
--accent-secondary: #667eea /* Roxo suave */

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-accent: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)
```

## 📱 Responsividade

O dashboard foi desenvolvido com abordagem **mobile-first** e possui breakpoints para:

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🧩 Componentes

### MetricsCard
Card reutilizável que exibe métricas com ícone, valor, tendência e descrição.

**Props:**
- `title`: Título da métrica
- `value`: Valor principal
- `trend`: Tipo de tendência ('positive' | 'negative')
- `trendValue`: Valor da tendência
- `icon`: Ícone SVG
- `iconBg`: Cor de fundo do ícone
- `description`: Descrição adicional

### LineChartComponent
Gráfico de linha para visualizar evolução temporal.

**Props:**
- `data`: Objeto com `labels` e `values`

### BarChartComponent
Gráfico de barras para comparações.

**Props:**
- `data`: Objeto com `labels` e `values`

### DoughnutChartComponent
Gráfico de rosca para distribuições percentuais.

**Props:**
- `data`: Objeto com `labels` e `values`

## 🔧 Customização

### Alterando Cores
Edite as variáveis CSS em `App.css`:

```css
:root {
  --accent-primary: #sua-cor;
  --bg-primary: #sua-cor;
}
```

### Modificando Dados
Edite o arquivo `data/mockData.js` para alterar as métricas e gráficos.

### Adicionando Novos Gráficos
1. Crie um novo componente em `components/`
2. Importe em `App.jsx`
3. Configure os dados em `mockData.js`

## 🎓 Conceitos Aplicados

Este projeto demonstra:

- ✅ **Componentização** em React
- ✅ **Hooks** (useState, useEffect, useRef)
- ✅ **Props** e passagem de dados
- ✅ **CSS Variables** para temas
- ✅ **Flexbox** e **CSS Grid**
- ✅ **Animações CSS** e com Framer Motion
- ✅ **Responsividade** completa
- ✅ **Boas práticas** de código limpo
- ✅ **Integração** com bibliotecas externas
- ✅ **Performance** e otimização

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- Portfolio: [seu-portfolio.com](https://seu-portfolio.com)
- LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- GitHub: [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Design inspirado em dashboards modernos de SaaS
- Ícones e elementos visuais personalizados
- Comunidade React e Chart.js

---

⭐ **Se este projeto foi útil, considere dar uma estrela!**

💼 **Projeto desenvolvido para portfólio de desenvolvedor frontend**
