module.exports = {
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        // 'prettier/@typescript-eslint',
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended',
    ], //定义文件继承的子规范
    plugins: ['vue', '@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        'vue/no-multiple-template-root': 'off',
        'object-curly-newline': ['error', { consistent: true }],
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'no-case-declarations': 'off',
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/member-ordering': 2,
        '@typescript-eslint/no-console': 0,
        '@typescript-eslint/object-literal-sort-keys': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name': 0,
        '@typescript-eslint/no-shadowed-variable': 0,
        '@typescript-eslint/no-eval': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/indent': [2, 4],
        'no-bitwise': 0,
        'no-plusplus': [
            2,
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
};
