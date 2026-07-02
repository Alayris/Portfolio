# Portfolio Amaris Menou

## Démarrage rapide

### 1. Installer Node.js
Télécharge Node.js LTS sur [nodejs.org](https://nodejs.org) et installe-le.

### 2. Installer les dépendances
```bash
cd portfolio-amaris
npm install
```

### 3. Lancer en développement
```bash
npm run dev
```
Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

### 4. Builder pour la production
```bash
npm run build
npm start
```

## Structure
```
app/
  page.tsx          → Accueil
  motion/           → Motion Design
  graphisme/        → Graphisme & D.A.
  illustration/     → Illustration
  about/            → À Propos & Contact
components/
  Navigation.tsx    → Nav fixe avec indicateur de page
  ui/
    CustomCursor    → Curseur custom animé
    ProjectCard     → Carte projet avec animation
    PageHeader      → En-tête de page animé
    SmoothScrollProvider → Scroll fluide + transitions de page
```

## Personnalisation
- **Couleurs** → `tailwind.config.ts` (`accent`, `cream`, `charcoal`)
- **Projets** → dans chaque `app/[section]/page.tsx`
- **Contact email** → `app/about/page.tsx`, ligne avec `mailto:`
- **Polices** → `app/globals.css` (actuellement Cormorant Garamond + Inter)
