const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull
} = require('graphql');
const { authors, books } = require('./data');

const app = express();

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => authors.find((
                author
            ) => author.id === book.authorId)
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents an author of a book.',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(BookType),
            resolve: (author) => books.filter((book) => book.authorId === author.id)
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'Single book',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) =>
                books.find((book) => book.id === args.id)
        },
        author: {
            type: AuthorType,
            description: 'Single author',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) =>
                authors.find((author) => author.id === args.id)
        },
        books: {
            type: GraphQLList(BookType),
            description: 'List of all books',
            resolve: () => books
        },
        authors: {
            type: GraphQLList(AuthorType),
            description: 'List of all authors',
            resolve: () => authors
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(5000, () => console.log('Server running!'));
