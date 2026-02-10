# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Dashboard Analytics! Este documento fornece diretrizes para manter a qualidade e consistência do código.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Padrões de Código](#padrões-de-código)
- [Estrutura de Commits](#estrutura-de-commits)
- [Boas Práticas React](#boas-práticas-react)

---

## 📜 Código de Conduta

- Seja respeitoso e profissional
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros colaboradores

---

## 🚀 Como Contribuir

### 1. Fork do Projeto
```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/dashboard-analytics.git
cd dashboard-analytics
```

### 2. Crie uma Branch
```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

### 3. Faça suas Alterações
- Siga os padrões de código
- Adicione comentários quando necessário
- Teste suas alterações

### 4. Commit
```bash
git add .
git commit -m "feat: adiciona nova funcionalidade X"
```

### 5. Push e Pull Request
```bash
git push origin feature/nova-funcionalidade
# Abra um Pull Request no GitHub
```

---

## 💻 Padrões de Código

### JavaScript/React

#### ✅ Bom
```javascript
// Nomes descritivos e em camelCase
const handleUserClick = () => {
  // código
};

// Componentes em PascalCase
const MetricsCard = ({ title, value }) => {
  return (
    <div className="metrics-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};
```

#### ❌ Evitar
```javascript
// Nomes vagos
const func1 = () => {};

// Componentes mal nomeados
const card = () => {};
```

### CSS

#### ✅ Bom
```css
/* Classes descritivas e em kebab-case */
.metrics-card {
  display: flex;
  flex-direction: column;
}

/* Use variáveis CSS */
.header {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

#### ❌ Evitar
```css
/* Classes genéricas */
.box1 {
  /* ... */
}

/* Cores hardcoded */
.card {
  background: #0a0e14;
}
```

---

## 📝 Estrutura de Commits

Use **Conventional Commits** para mensagens claras:

### Tipos de Commit

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alteração em documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `test`: Adição ou modificação de testes
- `chore`: Tarefas de manutenção

### Exemplos

```bash
feat: adiciona gráfico de pizza
fix: corrige responsividade do header
docs: atualiza README com novos exemplos
style: formata código com prettier
refactor: melhora performance do LineChart
chore: atualiza dependências
```

---

## ⚛️ Boas Práticas React

### 1. Componentes Funcionais
```javascript
// ✅ Use componentes funcionais com hooks
const MetricsCard = ({ title, value }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return <div>...</div>;
};

// ❌ Evite componentes de classe
class MetricsCard extends React.Component {
  render() { return <div>...</div>; }
}
```

### 2. Destructuring de Props
```javascript
// ✅ Destructure props no parâmetro
const Card = ({ title, subtitle, value }) => {
  return <div>{title}</div>;
};

// ❌ Evite acessar props.x
const Card = (props) => {
  return <div>{props.title}</div>;
};
```

### 3. Componentização
```javascript
// ✅ Componentes pequenos e focados
const MetricsIcon = ({ icon, color }) => (
  <div style={{ background: color }}>
    {icon}
  </div>
);

const MetricsCard = ({ title, value, icon }) => (
  <div>
    <MetricsIcon icon={icon} color="#667eea" />
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);
```

### 4. Evite Prop Drilling
```javascript
// ✅ Use context ou props apenas quando necessário
const ThemeContext = createContext();

// ❌ Evite passar props por muitos níveis
<A>
  <B data={data}>
    <C data={data}>
      <D data={data} />
    </C>
  </B>
</A>
```

### 5. useEffect Limpo
```javascript
// ✅ Sempre limpe side effects
useEffect(() => {
  const timer = setInterval(() => {
    // código
  }, 1000);
  
  return () => clearInterval(timer); // cleanup
}, []);
```

### 6. Keys em Listas
```javascript
// ✅ Use IDs únicos como keys
{items.map(item => (
  <Card key={item.id} {...item} />
))}

// ❌ Evite índices como keys
{items.map((item, index) => (
  <Card key={index} {...item} />
))}
```

---

## 🎨 Padrões CSS

### 1. Variáveis CSS
```css
/* ✅ Use variáveis para valores reutilizáveis */
:root {
  --spacing-md: 1.5rem;
  --radius-lg: 16px;
}

.card {
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
}
```

### 2. BEM Naming (opcional)
```css
/* Block__Element--Modifier */
.metrics-card { }
.metrics-card__header { }
.metrics-card__header--active { }
```

### 3. Mobile First
```css
/* ✅ Comece com mobile, adicione desktop depois */
.card {
  padding: 1rem; /* mobile */
}

@media (min-width: 768px) {
  .card {
    padding: 2rem; /* desktop */
  }
}
```

---

## 🧪 Testes

Antes de fazer commit:

```bash
# Execute o linter
npm run lint

# Teste a build
npm run build

# Verifique em diferentes telas
# - Mobile (< 480px)
# - Tablet (481-768px)
# - Desktop (> 768px)
```

---

## 📦 Estrutura de Arquivos

Ao adicionar novos arquivos, siga esta estrutura:

```
dashboard-analytics/
├── components/
│   ├── NomeComponente.jsx      # Componente
│   └── NomeComponente.css      # Estilos (se necessário)
├── data/
│   └── mockData.js             # Dados mockados
├── utils/                       # Funções utilitárias
├── hooks/                       # Custom hooks
└── assets/                      # Imagens, ícones, etc
```

---

## ✅ Checklist Antes do Pull Request

- [ ] Código segue os padrões estabelecidos
- [ ] Todas as variáveis e funções têm nomes descritivos
- [ ] Componentes estão devidamente comentados
- [ ] CSS usa variáveis quando aplicável
- [ ] Código foi testado em diferentes resoluções
- [ ] Não há console.logs desnecessários
- [ ] Commit segue Conventional Commits
- [ ] README foi atualizado (se necessário)

---

## 🎯 Ideias para Contribuição

### Funcionalidades
- [ ] Adicionar mais tipos de gráficos
- [ ] Implementar filtros de data
- [ ] Adicionar modo claro (light mode)
- [ ] Exportar dados em PDF/CSV
- [ ] Integrar com APIs reais

### Melhorias
- [ ] Otimizar performance
- [ ] Adicionar testes unitários
- [ ] Melhorar acessibilidade (a11y)
- [ ] Adicionar animações extras
- [ ] Documentar componentes com Storybook

---

## 💬 Perguntas?

Se tiver dúvidas, abra uma **Issue** no GitHub ou entre em contato:

- Email: seu-email@exemplo.com
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

---

**Obrigado por contribuir! 🎉**
