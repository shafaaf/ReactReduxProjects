const {
    GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList
} = require('graphql');

const _ = require('lodash');

const { usersData, hobbiesData, postsData } = require('./data');

// Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Description for user',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        profession: { type: GraphQLString },
        posts: {
            type: GraphQLList(PostType),
            resolve: (parent) => _.filter(postsData, { userId: parent.id })
        },
        hobbies: {
            type: GraphQLList(HobbyType),
            resolve: (parent) => _.filter(hobbiesData, { userId: parent.id })
        }
    })
});

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Description for hobby',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        userId: { type: GraphQLInt }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Description for Post',
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        userId: { type: GraphQLInt },
        user: {
            type: UserType,
            resolve: (parent) => _.find(usersData, { id: parent.userId })
        }
    })
});

// Root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'This is the root query',
    fields: () => ({
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => _.find(usersData, { id: args.id })
        },
        hobby: {
            type: HobbyType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => _.find(hobbiesData, { id: args.id })
        },
        post: {
            type: PostType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => _.find(postsData, { id: args.id })
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
