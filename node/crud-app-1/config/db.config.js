const dotenv = require('dotenv');
dotenv.config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSSWORD;
const clusterUrl = process.env.CLUSTER_URL;

module.exports = {
    url: `mongodb+srv://${username}:${password}@${clusterUrl}/myFirstDatabase`
};
