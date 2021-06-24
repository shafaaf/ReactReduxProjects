const {
    GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList
} = require('graphql');

const User = require('../mongoose-model/user');
const Hobby = require('../mongoose-model/hobby');
const Post = require('../mongoose-model/post');

const { UserType, PostType, HobbyType } = require('../types');

// Root query
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
            description: 'Create a single book',
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
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
        createPost: {
            type: PostType,
            description: 'Create a single post',
            args: {
                comment: { type: GraphQLString },
                userId: { type: GraphQLString }
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
        createHobby: {
            type: HobbyType,
            description: 'Create a single hobby',
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                userId: { type: GraphQLString }
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
