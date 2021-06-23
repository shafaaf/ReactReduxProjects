const {
    GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList
} = require('graphql');
const _ = require('lodash');
const User = require('./model/user');
const Hobby = require('./model/hobby');
const Post = require('./model/post');

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
        userId: { type: GraphQLInt },
        user: {
            type: UserType,
            resolve: (parent) => _.find(usersData, { id: parent.userId })
        }
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
        users: {
            type: GraphQLList(UserType),
            resolve: () => usersData
        },
        hobby: {
            type: HobbyType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => _.find(hobbiesData, { id: args.id })
        },
        hobbies: {
            type: GraphQLList(HobbyType),
            resolve: () => hobbiesData
        },
        post: {
            type: PostType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => _.find(postsData, { id: args.id })
        },
        posts: {
            type: GraphQLList(PostType),
            resolve: () => postsData
        }
    })
});

// Mutations
const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'This is the root mutation',
    fields: () => ({
        createUser: {
            type: UserType,
            description: 'Create a single book',
            args: {
                // id: { type: GraphQLID },
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                profession: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                // save to mongodb
                const user = new User({
                    // id: usersData.length + 1,
                    name: args.name,
                    age: args.age,
                    profession: args.profession
                });

                // TODO: unsure why cant do this
                // user.save()
                // .then(() => {
                //     init()
                // .then(() => user);
                // });
                user.save();
                return user;
            }
        },
        createPost: {
            type: PostType,
            description: 'Create a single post',
            args: {
                // id: { type: GraphQLID },
                comment: { type: GraphQLString },
                userId: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                const post = {
                    id: postsData.length + 1,
                    comment: args.comment,
                    userId: args.userId
                };
                // postsData.push(post);
                return post;
            }
        },
        createHobby: {
            type: HobbyType,
            description: 'Create a single hobby',
            args: {
                // id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                userId: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                const hobby = {
                    id: postsData.length + 1,
                    title: args.title,
                    description: args.description,
                    userId: args.userId
                };
                // hobbiesData.push(hobby);
                return hobby;
            }
        }
    })
});

const init = async () => {
    console.log(1);
    await sleep(5000);
    console.log(2);
};

const sleep = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
});
