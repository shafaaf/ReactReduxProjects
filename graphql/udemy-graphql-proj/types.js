const {
    GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList
} = require('graphql');

const User = require('./mongoose-model/user');
const Hobby = require('./mongoose-model/hobby');
const Post = require('./mongoose-model/post');

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
            resolve: (parent) => Post.find({ userId: parent.id })
        },
        hobbies: {
            type: GraphQLList(HobbyType),
            resolve: (parent) => Hobby.find({ userId: parent.id })
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
        userId: { type: GraphQLString }, // TODO: Unsure use id or string
        user: {
            type: UserType,
            resolve: (parent) => User.findById(parent.userId)
        }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Description for Post',
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        userId: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: (parent) => User.findById(parent.userId)
        }
    })
});

exports.UserType = UserType;
exports.HobbyType = HobbyType;
exports.PostType = PostType;
