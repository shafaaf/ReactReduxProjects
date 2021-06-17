const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { coursesData } = require('./data');

const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

const getCourse = (args) => {
    const { id } = args;
    return coursesData.filter((course) => course.id === id)[0];
};
const getCourses = (args) => {
    if (args.topic) {
        const { topic } = args;
        return coursesData.filter((course) => course.topic === topic);
    }
    return coursesData;
};
const updateCourseTopic = ({ id, topic }) => {
    coursesData.map((course) => {
        if (course.id === id) {
            // eslint-disable-next-line no-param-reassign
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter((course) => course.id === id)[0];
};

const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));
app.listen(5000, () => console.log('Express GraphQL Server Now Running On localhost:5000/graphql'));
