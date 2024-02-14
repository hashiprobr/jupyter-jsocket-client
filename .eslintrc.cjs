module.exports = {
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@stylistic/js',
        'jsdoc',
    ],
    rules: {
        'array-callback-return': ['warn'],
        'constructor-super': ['warn'],
        'for-direction': ['warn'],
        'getter-return': ['warn'],
        'no-async-promise-executor': ['warn'],
        'no-class-assign': ['warn'],
        'no-compare-neg-zero': ['warn'],
        'no-cond-assign': ['warn'],
        'no-const-assign': ['warn'],
        'no-constant-binary-expression': ['warn'],
        'no-constant-condition': ['warn'],
        'no-constructor-return': ['warn'],
        'no-debugger': ['warn'],
        'no-dupe-args': ['warn'],
        'no-dupe-class-members': ['warn'],
        'no-dupe-else-if': ['warn'],
        'no-dupe-keys': ['warn'],
        'no-duplicate-case': ['warn'],
        'no-duplicate-imports': ['warn'],
        'no-empty-pattern': ['warn'],
        'no-func-assign': ['warn'],
        'no-import-assign': ['warn'],
        'no-loss-of-precision': ['warn'],
        'no-misleading-character-class': ['warn'],
        'no-new-native-nonconstructor': ['warn'],
        'no-new-symbol': ['warn'],
        'no-obj-calls': ['warn'],
        'no-promise-executor-return': ['warn'],
        'no-prototype-builtins': ['warn'],
        'no-self-assign': ['warn'],
        'no-self-compare': ['warn'],
        'no-setter-return': ['warn'],
        'no-template-curly-in-string': ['warn'],
        'no-this-before-super': ['warn'],
        'no-unexpected-multiline': ['warn'],
        'no-unmodified-loop-condition': ['warn'],
        'no-unreachable': ['warn'],
        'no-unreachable-loop': ['warn'],
        'no-unsafe-finally': ['warn'],
        'no-unsafe-negation': ['warn'],
        'no-unsafe-optional-chaining': ['warn'],
        'no-unused-private-class-members': ['warn'],
        'no-unused-vars': ['warn'],
        'no-use-before-define': ['warn', { functions: false }],
        'no-useless-backreference': ['warn'],
        'require-atomic-updates': ['warn'],
        'use-isnan': ['warn'],
        'valid-typeof': ['warn'],
        'block-scoped-var': ['warn'],
        'camelcase': ['warn'],
        'default-case': ['warn'],
        'default-case-last': ['warn'],
        'default-param-last': ['warn'],
        'dot-notation': ['warn'],
        'eqeqeq': ['warn'],
        'func-style': ['warn', 'declaration'],
        'grouped-accessor-pairs': ['warn'],
        'new-cap': ['warn'],
        'no-alert': ['warn'],
        'no-array-constructor': ['warn'],
        'no-caller': ['warn'],
        'no-case-declarations': ['warn'],
        'no-else-return': ['warn'],
        'no-empty': ['warn'],
        'no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
        'no-empty-static-block': ['warn'],
        'no-eval': ['warn'],
        'no-extra-bind': ['warn'],
        'no-extra-boolean-cast': ['warn'],
        'no-extra-label': ['warn'],
        'no-implied-eval': ['warn'],
        'no-invalid-this': ['warn'],
        'no-iterator': ['warn'],
        'no-label-var': ['warn'],
        'no-lone-blocks': ['warn'],
        'no-lonely-if': ['warn'],
        'no-loop-func': ['warn'],
        'no-multi-assign': ['warn'],
        'no-multi-str': ['warn'],
        'no-negated-condition': ['warn'],
        'no-new': ['warn'],
        'no-new-func': ['warn'],
        'no-new-wrappers': ['warn'],
        'no-nonoctal-decimal-escape': ['warn'],
        'no-object-constructor': ['warn'],
        'no-octal': ['warn'],
        'no-octal-escape': ['warn'],
        'no-proto': ['warn'],
        'no-return-assign': ['warn'],
        'no-script-url': ['warn'],
        'no-sequences': ['warn'],
        'no-throw-literal': ['warn'],
        'no-undef-init': ['warn'],
        'no-unneeded-ternary': ['warn'],
        'no-unused-expressions': ['warn'],
        'no-unused-labels': ['warn'],
        'no-useless-call': ['warn'],
        'no-useless-catch': ['warn'],
        'no-useless-computed-key': ['warn'],
        'no-useless-concat': ['warn'],
        'no-useless-constructor': ['warn'],
        'no-useless-escape': ['warn'],
        'no-useless-rename': ['warn'],
        'no-useless-return': ['warn'],
        'no-var': ['warn'],
        'prefer-arrow-callback': ['warn'],
        'prefer-const': ['warn'],
        'prefer-exponentiation-operator': ['warn'],
        'prefer-numeric-literals': ['warn'],
        'prefer-object-has-own': ['warn'],
        'prefer-object-spread': ['warn'],
        'prefer-promise-reject-errors': ['warn'],
        'prefer-regex-literals': ['warn'],
        'prefer-rest-params': ['warn'],
        'prefer-spread': ['warn'],
        'prefer-template': ['warn'],
        'require-await': ['warn'],
        'require-yield': ['warn'],
        'yoda': ['warn'],
        'unicode-bom': ['warn'],
        '@stylistic/js/arrow-parens': ['warn'],
        '@stylistic/js/comma-dangle': ['warn', 'always-multiline'],
        '@stylistic/js/comma-style': ['warn'],
        '@stylistic/js/dot-location': ['warn', 'property'],
        '@stylistic/js/eol-last': ['warn'],
        '@stylistic/js/linebreak-style': ['warn'],
        '@stylistic/js/max-statements-per-line': ['warn'],
        '@stylistic/js/new-parens': ['warn'],
        '@stylistic/js/no-extra-parens': ['warn'],
        '@stylistic/js/no-extra-semi': ['warn'],
        '@stylistic/js/no-floating-decimal': ['warn'],
        '@stylistic/js/no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
        '@stylistic/js/operator-linebreak': ['warn', 'none'],
        '@stylistic/js/quote-props': ['warn', 'consistent-as-needed'],
        '@stylistic/js/quotes': ['warn', 'single'],
        '@stylistic/js/semi': ['warn'],
        '@stylistic/js/semi-style': ['warn'],
        'jsdoc/check-access': ['warn'],
        'jsdoc/check-alignment': ['warn'],
        'jsdoc/check-indentation': ['warn'],
        'jsdoc/check-line-alignment': ['warn'],
        'jsdoc/check-param-names': ['warn'],
        'jsdoc/check-property-names': ['warn'],
        'jsdoc/check-tag-names': ['warn'],
        'jsdoc/check-types': ['warn'],
        'jsdoc/check-values': ['warn'],
        'jsdoc/empty-tags': ['warn'],
        'jsdoc/implements-on-classes': ['warn'],
        'jsdoc/informative-docs': ['warn'],
        'jsdoc/multiline-blocks': ['warn'],
        'jsdoc/no-bad-blocks': ['warn'],
        'jsdoc/no-blank-block-descriptions': ['warn'],
        'jsdoc/no-blank-blocks': ['warn'],
        'jsdoc/no-defaults': ['warn'],
        'jsdoc/no-multi-asterisks': ['warn'],
        'jsdoc/no-types': ['warn'],
        'jsdoc/no-undefined-types': ['warn'],
        'jsdoc/require-asterisk-prefix': ['warn'],
        'jsdoc/require-description': ['warn'],
        'jsdoc/require-param': ['warn'],
        'jsdoc/require-param-description': ['warn'],
        'jsdoc/require-param-name': ['warn'],
        'jsdoc/require-param-type': ['warn'],
        'jsdoc/require-property': ['warn'],
        'jsdoc/require-property-description': ['warn'],
        'jsdoc/require-property-name': ['warn'],
        'jsdoc/require-property-type': ['warn'],
        'jsdoc/require-returns': ['warn'],
        'jsdoc/require-returns-check': ['warn'],
        'jsdoc/require-returns-description': ['warn'],
        'jsdoc/require-returns-type': ['warn'],
        'jsdoc/require-throws': ['warn'],
        'jsdoc/require-yields': ['warn'],
        'jsdoc/require-yields-check': ['warn'],
        'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
        'jsdoc/valid-types': ['warn'],
    },
    overrides: [
        {
            files: [
                '**/__tests__/**',
            ],
            plugins: [
                'jest',
            ],
            rules: {
                'jest/consistent-test-it': ['warn'],
                'jest/expect-expect': ['warn'],
                'jest/no-alias-methods': ['warn'],
                'jest/no-commented-out-tests': ['warn'],
                'jest/no-conditional-in-test': ['warn'],
                'jest/no-confusing-set-timeout': ['warn'],
                'jest/no-deprecated-functions': ['warn'],
                'jest/no-disabled-tests': ['warn'],
                'jest/no-done-callback': ['warn'],
                'jest/no-duplicate-hooks': ['warn'],
                'jest/no-export': ['warn'],
                'jest/no-focused-tests': ['warn'],
                'jest/no-identical-title': ['warn'],
                'jest/no-jasmine-globals': ['warn'],
                'jest/no-mocks-import': ['warn'],
                'jest/no-standalone-expect': ['warn'],
                'jest/no-test-prefixes': ['warn'],
                'jest/no-test-return-statement': ['warn'],
                'jest/prefer-called-with': ['warn'],
                'jest/prefer-comparison-matcher': ['warn'],
                'jest/prefer-each': ['warn'],
                'jest/prefer-equality-matcher': ['warn'],
                'jest/prefer-expect-resolves': ['warn'],
                'jest/prefer-hooks-in-order': ['warn'],
                'jest/prefer-hooks-on-top': ['warn'],
                'jest/prefer-lowercase-title': ['warn'],
                'jest/prefer-mock-promise-shorthand': ['warn'],
                'jest/prefer-spy-on': ['warn'],
                'jest/prefer-strict-equal': ['warn'],
                'jest/prefer-to-be': ['warn'],
                'jest/prefer-to-contain': ['warn'],
                'jest/prefer-to-have-length': ['warn'],
                'jest/prefer-todo': ['warn'],
                'jest/require-hook': ['warn'],
                'jest/valid-describe-callback': ['warn'],
                'jest/valid-expect': ['warn'],
                'jest/valid-expect-in-promise': ['warn'],
                'jest/valid-title': ['warn'],
            },
        },
    ],
};
