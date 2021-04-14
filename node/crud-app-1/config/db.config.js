const dotenv = require('dotenv');
dotenv.config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSSWORD;

module.exports = {
    url: `mongodb+srv://${username}:${password}@cluster0.fw7uc.mongodb.net/myFirstDatabase`
};
