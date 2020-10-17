module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "prettier"
    ],
    extends: [
        // 'eslint:recommended',
        // 'plugin:@teypescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        "prettier"
    ],
    "rules": {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "comma-dangle": "off",
        "no-plusplus": "off",
        "no-console": 1
    }
};
