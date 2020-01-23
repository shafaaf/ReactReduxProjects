module.exports = {
    "extends": "airbnb-base",
    "env": {
        "jest": true,
        "node": true
    },
    "rules": {
        "indent": "off",
        "comma-dangle": "off",
        "no-plusplus": "off",
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }]
    }
};
