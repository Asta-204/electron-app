# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Mettre un projt sur github pour la premiere fois
git init

git add .

git commit -m "Add all my files"

git remote add origin https://github.com/yourusername/your-repo-name.git

git push origin master

## Commande de lancement du projet en local
  ## npm run dev ----> pour lancer le serveur de vite (represente le contenu du projet)
  ## npm run electron ----> pour lancer le serveur d'electron
## Tous les packages ou dépendances installés

  ## installer electron dans un projet 
    npm install --save-dev electron

  ## build ou lancé le projet electron
    npm install electron-builder --save-dev

  ## Installation de React Hook Form avec shadcn
    npx shadcn@latest add form
  
  ## Installation d'input avec shadcn
    npx shadcn@latest add input

  ## integration du dashboard de shadcn ui au projet

    npx shadcn@latest add dashboard-01
## Processus de mise à jour au fur et à mésure
  # Télécharger et installer nvm :
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# au lieu de redémarrer le shell
\. "$HOME/.nvm/nvm.sh"
# Télécharger et installer Node.js :
nvm install 22
# Vérifier la version de Node.js :
node -v # Doit afficher "v22.16.0".
nvm current # Doit afficher "v22.16.0".




## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
