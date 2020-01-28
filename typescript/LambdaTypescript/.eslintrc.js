module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        // 'eslint:recommended',
        // 'plugin:@teypescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        'airbnb-typescript'
    ],
    "rules": {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "comma-dangle": "off",
        "no-plusplus": "off"
    }
};
