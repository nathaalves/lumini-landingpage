/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  semi: false,
  trailingComma: 'none',
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  quoteProps: 'as-needed',
  endOfLine: 'auto',
  bracketSameLine: false,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  importOrder: [
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/lib/(.*)$',
    '^@/utils/(.*)$',
    '^@/services(/.*)?$',
    '^@/constants(/.*)?$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}

export default config
