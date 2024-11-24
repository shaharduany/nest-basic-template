import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import nestjsPlugin from 'eslint-plugin-nestjs';
import spellchecker from 'eslint-plugin-spellcheck';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      globals: {
        node: true,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      nestjs: nestjsPlugin,
      spellcheck: spellchecker,
    },
    rules: {
      ...prettier.rules,
      ...typescript.configs['recommended'].rules,
      ...nestjsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'spellcheck/spell-checker': [
        1,
        {
          comments: true,
          strings: true,
          identifiers: true,
          templates: true,
          lang: 'en_US',
          skipWords: [
            'dict',
            'aff',
            'hunspellchecker',
            'hunspell',
            'utils',
            'nullable',
            'sql',
            'dto',
            'axios',
            'cron',
            'crons',
            'uri',
            'dsn',
            'mongodb',
            'mariadb',
            'mysql',
            'joi',
            'localhost',
            'orm',
            'ascii',
            'repl',
          ],
          skipIfMatch: ['http://[^s]*', '^[-\\w]+/[-\\w\\.]+$'],
          skipWordIfMatch: ['^foobar.*$'],
          minLength: 3,
        },
      ],
    },
  },
];
