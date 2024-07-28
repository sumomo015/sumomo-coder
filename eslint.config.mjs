// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
  ...tseslint.config(
    {
      ignores: ['node_modules', 'dist', 'build', 'out'],
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
      rules: {
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      },
    },
    {
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
  ),
  stylistic.configs['recommended-flat'],
]
