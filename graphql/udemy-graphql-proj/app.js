const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const port = 4000;
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Listening for requests on port: ${port}`);
});
