const {
    GraphQLSchema, GraphQLObjectType, GraphQLNonNull,
    GraphQLInt, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLFloat
} = require('graphql');

// scalar types i.e like primitive in programming languages
const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'Represents a Person type',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        isMarried: { type: GraphQLBoolean },
        gpa: { type: GraphQLFloat },
        justAType: {
            type: PersonType,
            resolve: (parent) => parent
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'This is the root query',
    fields: () => ({
        person: {
            type: PersonType,
            description: 'Single person',
            resolve: () => {
                const person = {
                    name: 'Antonio',
                    age: 32,
                    isMarried: true,
                    gpa: 4.0
                };
                return person;
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
