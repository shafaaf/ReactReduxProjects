module.exports = {
    "extends": "airbnb-base",
    "env": {
        "jest": true,
        "node": true
    },
    "rules": {
        "indent": ["error", 4, {"MemberExpression": "off"}],
        "comma-dangle": "off",
        "no-plusplus": "off",
        "prefer-destructuring": "off"
    }
};
