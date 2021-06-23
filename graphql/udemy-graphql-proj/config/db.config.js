const dotenv = require('dotenv');

dotenv.config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSSWORD;
const clusterUrl = process.env.CLUSTER_URL;
const databaseName = 'udemy-graphql-course';

module.exports = {
    url: `mongodb+srv://${username}:${password}@${clusterUrl}/${databaseName}`
};
