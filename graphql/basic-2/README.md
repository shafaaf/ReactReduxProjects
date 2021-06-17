From:
https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1



On graphql ui, use the following:

```
query {
    course(id: 2) {
        id
        title
        author
    }
}
```

```
query {
    courses(topic: "Node.js") {
        id
        title
        author
    }
}
```

```
mutation {
    updateCourseTopic(id: 2, topic: "Cats") {
        id
        title
        topic
    }
}
```
