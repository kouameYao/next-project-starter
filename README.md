# 🚀 Next.js Starter Template - Configuration Guide

## 📋 Table des matières

1. [Stack Technologique](#stack-technologique)
2. [Configuration Détaillée](#configuration-détaillée)
3. [Installation](#installation)
4. [Structure du Projet](#structure-du-projet)
5. [Utilisation](#utilisation)

---

## 🛠 Stack Technologique

### Framework & Core

- ✅ **Next.js 14.2.5** - App Router
- ✅ **React 18** - UI Library
- ✅ **TypeScript 5** - Type Safety

### Styling

- ✅ **Tailwind CSS v4** - Utility-first CSS
- ✅ **Radix UI** - Headless UI Components
- ✅ **Class Variance Authority (CVA)** - Component Variants
- ✅ **Aeonik Font** - Custom Font Family

### State Management

- ✅ **Zustand 5.0.8** - Global State
  - Store demo configuré
  - Store d'authentification avec persistence
  - Store UI (sidebar, theme)
- ✅ **nuqs 2.7.0** - URL State Management
  - Hooks personnalisés (pagination, search, filters, tabs, modals)
  - Synchronisation automatique avec l'URL

### Data Fetching

- ✅ **TanStack Query (React Query) 5.76** - Server State
  - Configuration optimisée
  - DevTools inclus
  - Persistence configurée

### Forms & Validation

- ✅ **React Hook Form 7.52** - Form Management
- ✅ **Zod 3.23** - Schema Validation
- ✅ **@hookform/resolvers** - Form + Zod Integration

### Authentication

- ✅ **Better Auth 1.3.24** - Modern Auth Solution
  - Configuration basique en place
  - Provider configuré

### Internationalization (i18n)

- ✅ **next-international 1.3.1** - i18n pour Next.js
  - Support FR/EN configuré
  - Client & Server hooks
  - Middleware i18n

### Code Quality

- ✅ **ESLint 8** - Linting
  - Config Next.js
  - TypeScript rules
  - Import order rules
- ✅ **Prettier 3.3.3** - Code Formatting
- ✅ **Husky 9.1.3** - Git Hooks
  - pre-commit: lint-staged
  - commit-msg: commitlint
  - pre-push: build validation
- ✅ **Commitlint** - Commit Conventions
- ✅ **lint-staged** - Staged Files Linting

### UI Components

- ✅ **Lucide React** - Icons
- ✅ **Recharts** - Charts
- ✅ **Sonner** - Toast Notifications
- ✅ **React Hot Toast** - Alternative Toasts
- ✅ **Date-fns** - Date Utilities

### Utils

- ✅ **Lodash** - Utility Functions
- ✅ **clsx** & **tailwind-merge** - Classname Utils

---

## ⚙️ Configuration Détaillée

### 1. Zustand Configuration ✅

**Fichiers:**

- `store/auth-store.ts` - Authentification
- `store/ui-store.ts` - UI State
- `store/demo.ts` - Exemple
- `store/index.ts` - Export centralisé

### 2. nuqs Configuration ✅

**Hooks personnalisés:**

**Provider configuré:**

- `providers/nuqs-provider.tsx` intégré dans `app/layout.tsx`

### 3. React Query Configuration ✅

**Provider:**

- `providers/react-query-provider.tsx` avec DevTools

### 4. Next-International (i18n) ✅

**Fichiers:**

- `locales/en.ts` - Traductions EN
- `locales/fr.ts` - Traductions FR
- `locales/client.ts` - Client hooks
- `locales/server.ts` - Server hooks
- `middleware.ts` - i18n routing

### 5. Better Auth Configuration ✅

**Route API:**

- `app/api/auth/[...all]/route.ts` - Catch-all auth routes

**Provider:**

- `providers/auth-provider.tsx` (à configurer selon vos besoins)

### 6. ESLint Configuration ✅

**Règles configurées:**

- Import order automatique (alphabétique avec groupes)
- TypeScript strict
- React best practices
- Next.js optimizations

**.eslintrc.json** complet avec:

- `@typescript-eslint` rules
- Import order enforcement
- React props validation

### 7. Prettier Configuration ✅

**Settings (.prettierrc):**

```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}
```

### 8. Husky & Git Hooks ✅

**Hooks configurés:**

1. **pre-commit** - Lint staged files
2. **commit-msg** - Validate commit message (conventional commits)
3. **pre-push** - Run build

**Commitizen** configuré pour commits interactifs:

```bash
yarn commit  # OU npm run commit
```

### 9. Font Configuration ✅

**Aeonik Font Family** - Toutes les variantes:

- Thin (100) + Italic
- Air (200) + Italic
- Light (300) + Italic
- Regular (400) + Italic
- Medium (500) + Italic
- Bold (700) + Italic
- Black (900) + Italic

**Configuration:**

- `styles/fonts.css` - @font-face declarations
- `app/globals.css` - Tailwind config avec --font-sans
- `public/fonts/` - Fichiers .otf

### 10. VSCode Configuration ✅

**Settings (.vscode/settings.json):**

- Format on save (Prettier)
- ESLint auto-fix
- Tailwind IntelliSense
- TypeScript workspace version

**Extensions recommandées:**

- Prettier
- ESLint
- Tailwind CSS IntelliSense
- Error Lens
- Path Intellisense

---

## 📦 Installation

```bash
# 1. Cloner/Copier le template
git clone <your-repo>
cd <project-name>

# 2. Installer les dépendances
yarn install  # ou npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# 4. Initialiser Husky (si pas déjà fait)
yarn husky install  # ou npx husky install

# 5. Lancer le dev server
yarn dev

# 6. Build pour production
yarn build
```

---

## 📁 Structure du Projet

```
├── app/                    # Next.js App Router
│   ├── [local]/           # Routes i18n
│   │   ├── (public)/      # Routes publiques
│   │   └── dashboard/     # Routes dashboard
│   ├── api/               # API Routes
│   ├── globals.css        # Styles globaux
│   └── layout.tsx         # Root layout
│
├── components/            # Composants React
│   ├── ui/               # Composants UI (Radix + Tailwind)
│   ├── common/           # Composants communs
│   ├── shared/           # Composants partagés
│   └── react-hook-form/  # Form components
│
├── features/             # Feature-based organization
│   ├── auth/
│   └── dashboard/
│
├── hooks/                # Custom hooks
│   ├── use-query-params.ts
│   ├── use-mobile.tsx
│   └── use-scroll.ts
│
├── lib/                  # Libraries & configs
│   ├── auth.ts           # Better Auth
│   ├── react-query.ts    # Query config
│   ├── api-service.ts    # API client
│   └── utils.ts          # Utilities
│
├── locales/              # i18n
│   ├── en.ts
│   ├── fr.ts
│   ├── client.ts
│   └── server.ts
│
├── providers/            # React Providers
│   ├── auth-provider.tsx
│   ├── nuqs-provider.tsx
│   └── react-query-provider.tsx
│
├── store/                # Zustand stores
│   ├── auth-store.ts
│   ├── ui-store.ts
│   └── index.ts
│
├── styles/               # Styles
│   └── fonts.css         # Custom fonts
│
├── types/                # TypeScript types
├── utils/                # Utility functions
└── public/               # Static assets
    ├── fonts/
    ├── icons/
    └── images/
```

---

## 🎯 Utilisation

### Créer un nouveau store Zustand

```typescript
// store/my-store.ts
import { create } from 'zustand';

interface MyState {
  value: string;
  setValue: (value: string) => void;
}

export const useMyStore = create<MyState>((set) => ({
  value: '',
  setValue: (value) => set({ value })
}));

// store/index.ts
export { useMyStore } from './my-store';
```

### Utiliser nuqs pour URL state

```typescript
'use client';
import { useSearch, usePagination } from '@/hooks/use-query-params';

export function MyComponent() {
  const { search, setSearch } = useSearch();
  const { page, setPage } = usePagination();

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
```

### Ajouter une traduction

```typescript
// locales/fr.ts
export default {
  common: {
    welcome: 'Bienvenue',
    logout: 'Déconnexion'
  }
} as const;

// Component
import { useI18n } from '@/locales/client';

const t = useI18n();
<h1>{t('common.welcome')}</h1>
```

### Utiliser React Query

```typescript
// features/users/api/get-users.ts
export async function getUsers() {
  const response = await fetch('/api/users');
  return response.json();
}

export function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });
}

// Component
const { data, isLoading } = useGetUsers();
```

---

## ✅ Checklist avant de démarrer un nouveau projet

- [ ] Copier le template
- [ ] Renommer le projet dans `package.json`
- [ ] Configurer `.env` (copier depuis `.env.example`)
- [ ] Modifier `lib/auth.ts` avec votre `appName`
- [ ] Personnaliser les traductions dans `locales/`
- [ ] Adapter les couleurs dans `tailwind.config.js` et `globals.css`
- [ ] Supprimer les stores/hooks d'exemple si non nécessaires
- [ ] Configurer votre base de données pour Better Auth
- [ ] Installer les extensions VSCode recommandées
- [ ] Initialiser Husky: `yarn husky install`
- [ ] Tester: `yarn dev`

---

## 🚀 Scripts disponibles

```bash
yarn dev          # Lancer en développement
yarn build        # Build production
yarn start        # Lancer en production
yarn lint         # ESLint
yarn format       # Format avec Prettier
yarn check        # Vérifier le formatage
yarn commit       # Commit interactif (Commitizen)
```

---

## 📚 Documentation des packages

- [Next.js](https://nextjs.org/docs)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [nuqs](https://nuqs.47ng.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Better Auth](https://www.better-auth.com/)
- [next-international](https://next-international.vercel.app/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🎉 Prêt à coder !

Votre starter Next.js est maintenant configuré avec toutes les meilleures pratiques et outils modernes. Happy coding! 🚀
