/* eslint-disable no-undef */
const seedPosts = [{ id: "2", title: "Average Post" }];

db.posts.drop();
db.posts.insertMany(seedPosts);

printjson({ posts: db.getCollection("posts").find({}).count() });
