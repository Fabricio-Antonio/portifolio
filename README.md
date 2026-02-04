# Portfólio - Fabrício Santos

Site portfólio pessoal desenvolvido com React, TypeScript, Next.js e Tailwind CSS.

## Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **React 19** - Biblioteca UI

## Como executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) após iniciar o servidor de desenvolvimento.

## Estrutura do projeto

```
src/
├── app/           # App Router (layout, página principal)
├── components/    # Componentes React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
```

## Personalização

- **Projetos**: Edite o array em `src/components/Projects.tsx`
- **Experiência**: Edite o array em `src/components/Experience.tsx`
- **Contato**: Atualize os links no `Footer.tsx` e informações em `Contact.tsx`
- **Cores**: Ajuste as variáveis CSS em `src/app/globals.css`
