module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  parser: '@typescript-eslint/parser',
  // extends: 'standard',
  // add your custom rules here
  rules: {
    // StandardJS — The Rules
    indent: ['off', 2], // 2 spaces – for indentation
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'arrow-parens': ['error', 'as-needed'],
    curly: ['error', 'multi-line'],
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'require-await': 0,
    quotes: ['error', 'single'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'global-require': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'no-underscore-dangle': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 0,
  },
};
