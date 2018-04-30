
const mongoose = require('mongoose');
var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');





const typeDefs = `
type Cat {
  _id: String!
  name: String!
}
type Query {
  allCats: [Cat!]!
  oneCat(name: String!): Cat!
}
type Mutation {
  createCat(name: String!): Cat!
  removeCat(name: String!): [Cat!]!

}

`;


const resolvers = {
  Query: {
    allCats: async (parent, args, { Cat }) => {
      // { _id: 123123, name: "whatever"}
      const cats = await Cat.find();
      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    oneCat: async (parent, {name}, { Cat }) => {
      const oneKitty= await Cat.findOne({'name': name});

      return oneKitty;
    },
  },
  Mutation: {
    createCat: async (parent, args, { Cat }) => {
      // { _id: 123123, name: "whatever"}
      const kitty = await new Cat(args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
  removeCat: async (parent, {name}, { Cat }) => {
    var oneKitty= await Cat.remove(Cat.findOne({'name': name}));
    const cats = await Cat.find();
    return cats.map((x) => {
      x._id = x._id.toString();
      return x;
    });

    },
  },
};
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


const Cat = mongoose.model('Cat', { name: String });
// Some fake data
/*
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];
*/
// The GraphQL schema in string form


// The resolvers


// Put together a schema
mongoose.connect('mongodb://127.0.0.1:27017');


// Initialize the app
const app = express();

app.use(cors());
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context:{Cat} }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


// Start the server
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
