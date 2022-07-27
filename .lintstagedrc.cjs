const path = require('path')

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',
  // Prettier then format TypeScript and JavaScript files
  '*.{js,ts,svelte,css,scss,postcss,md,json}': [
    'prettier --write --plugin-search-dir=.',
    'prettier --check --plugin-search-dir=.',
  ],
  // ESlint
  '*.{js,ts,svelte}': 'eslint',
}
