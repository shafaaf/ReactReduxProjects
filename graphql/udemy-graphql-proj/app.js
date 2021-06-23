const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const dbConfig = require('./config/db.config');

const schema = require('./schema');
// const testSchema = require('./types_schema');

const port = 4000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const start = async () => {
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database!');
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening for requests on port: ${port}`);
        });
    })
    .catch((err) => {
        console.error('err is: ', err);
        process.exit();
    });
};

start();
