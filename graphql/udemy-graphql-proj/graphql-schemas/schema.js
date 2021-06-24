const {
    GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString,
    GraphQLID, GraphQLList, GraphQLNonNull
} = require('graphql');

const User = require('../mongoose-model/user');
const Hobby = require('../mongoose-model/hobby');
const Post = require('../mongoose-model/post');

const { UserType, PostType, HobbyType } = require('../types');

// Root query
// TODO: Unsure how to use promise.then in resolvers in queries and mutation
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'This is the root query',
    fields: () => ({
        user: { // get user by id
            type: UserType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => User.findById(args.id)
        },
        users: { // get all users
            type: GraphQLList(UserType),
            resolve: () => User.find({})
        },
        hobby: { // get hobby by id
            type: HobbyType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => Hobby.findById(args.id)
        },
        hobbies: { // all hobbies of a person
            type: GraphQLList(HobbyType),
            resolve: () => Hobby.find({})
        },
        post: { // get post by id
            type: PostType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => Post.findById(args.id)
        },
        posts: { // get all posts
            type: GraphQLList(PostType),
            resolve: () => Post.find({})
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
            description: 'Create a single user',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLNonNull(GraphQLInt) },
                profession: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                // generates id and save to mongodb
                const user = new User({
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
        updateUser: {
            type: UserType,
            description: 'Updates a single user',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                profession: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                // TODO: Maybe use $set in mongoose findByIdAndUpdate
                const buildUserObjectFromAQuery = (query) => ({
                    ...query.id && { id: query.id },
                    ...query.name && { name: query.name },
                    ...query.age && { age: query.age },
                    ...query.profession && { profession: query.profession }
                });
                const mongooseArgs = buildUserObjectFromAQuery(args);
                return User.findByIdAndUpdate(
                    args.id,
                    {
                        ...mongooseArgs
                    }, { new: true }
                );
            }
        },
        removeUser: {
            type: UserType,
            description: 'Removes a single user',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                // TODO: Unsure how to use promise.then here
                const removedUser = User.findByIdAndRemove(
                    args.id
                ).exec();
                if (!removedUser) {
                    return new Error('Error removing user');
                }
                return removedUser;
            }
        },
        createPost: {
            type: PostType,
            description: 'Create a single post',
            args: {
                comment: { type: GraphQLNonNull(GraphQLString) },
                userId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                // generates id and save to mongodb
                const post = new Post({
                    comment: args.comment,
                    userId: args.userId
                });
                post.save();
                return post;
            }
        },
        updatePost: {
            type: PostType,
            description: 'Updates a single post',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                comment: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => Post.findByIdAndUpdate(
                args.id,
                {
                    comment: args.comment
                }, { new: true }
            )
        },
        removePost: {
            type: PostType,
            description: 'Removes a single post',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                const removedPost = Post.findByIdAndRemove(
                    args.id
                ).exec();
                if (!removedPost) {
                    return new Error('Error removing post');
                }
                return removedPost;
            }
        },
        createHobby: {
            type: HobbyType,
            description: 'Create a single hobby',
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                userId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                // generates id and save to mongodb
                const hobby = new Hobby({
                    title: args.title,
                    description: args.description,
                    userId: args.userId
                });
                hobby.save();
                return hobby;
            }
        },
        updateHobby: {
            type: HobbyType,
            description: 'Updates a single hobby',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) }
            },

            resolve: (parent, args) => Hobby.findByIdAndUpdate(
                args.id,
                {
                    title: args.title,
                    description: args.description
                }, { new: true }
            )
        },
        removeHobby: {
            type: HobbyType,
            description: 'Removes a single hobby',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                const removedHobby = Hobby.findByIdAndRemove(
                    args.id
                ).exec();
                if (!removedHobby) {
                    return new Error('Error removing hobby');
                }
                return removedHobby;
            }
        }
    })
});

// const init = async () => {
//     console.log(1);
//     await sleep(5000);
//     console.log(2);
// };
// const sleep = (ms) => new Promise((resolve) => {
//     setTimeout(resolve, ms);
// });

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
});
