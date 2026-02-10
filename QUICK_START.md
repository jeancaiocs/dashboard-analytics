# 🚀 Guia Rápido - Dashboard Analytics

## Início Rápido (3 minutos)

### 1️⃣ Instalação
```bash
# Clone o projeto
git clone https://github.com/seu-usuario/dashboard-analytics.git
cd dashboard-analytics

# Instale as dependências
npm install
```

### 2️⃣ Executar
```bash
npm run dev
```

### 3️⃣ Acessar
Abra seu navegador em: **http://localhost:3000**

---

## 📦 Comandos Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa linter de código
```

---

## 🎯 Próximos Passos

### Para Personalizar o Dashboard:

1. **Alterar dados mockados**
   - Abra `data/mockData.js`
   - Modifique os valores das métricas e gráficos

2. **Modificar cores e tema**
   - Abra `App.css`
   - Edite as variáveis CSS em `:root`

3. **Adicionar novos componentes**
   - Crie na pasta `components/`
   - Importe no `App.jsx`

---

## 🎨 Customização Rápida

### Mudar cor principal:
```css
/* Em App.css */
:root {
  --accent-primary: #00d4ff;  /* Sua nova cor */
}
```

### Adicionar nova métrica:
```javascript
// Em data/mockData.js
{
  id: 5,
  title: 'Nova Métrica',
  value: '100K',
  trend: 'positive',
  trendValue: '+25%',
  icon: Icons.YourIcon,
  iconBg: 'linear-gradient(135deg, #color1, #color2)',
  description: 'Descrição da métrica'
}
```

---

## 🐛 Troubleshooting

### Erro ao instalar dependências?
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já está em uso?
```bash
# Use outra porta
npm run dev -- --port 3001
```

### Build não funciona?
```bash
# Verifique a versão do Node.js
node -v  # Deve ser 16 ou superior
```

---

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Chart.js](https://www.chartjs.org/docs/latest/)
- [Documentação Framer Motion](https://www.framer.com/motion/)
- [Guia Vite](https://vitejs.dev/guide/)

---

## ✅ Checklist para Portfólio

- [ ] Personalize as cores do tema
- [ ] Adicione seus próprios dados
- [ ] Modifique o README com suas informações
- [ ] Faça deploy (Vercel, Netlify, etc.)
- [ ] Adicione screenshots ao README
- [ ] Conecte com seu GitHub
- [ ] Compartilhe no LinkedIn

---

**💡 Dica:** Este projeto foi criado para impressionar recrutadores. Personalize-o e adicione ao seu portfólio!
