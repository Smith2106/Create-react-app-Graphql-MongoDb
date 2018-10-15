
const mongoose = require('mongoose');
var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');





const typeDefs = `
type DBString {
  _id: String!
  name: String!
}
type Query {
  allDBStrings: [DBString!]!
  oneDBString(name: String!): DBString!
}
type Mutation {
  createDBString(name: String!): DBString!
  removeDBString(name: String!): [DBString!]!

}

`;


const resolvers = {
  Query: {
    allDBStrings: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const DBStrings = await DBString.find();
      return DBStrings.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    oneDBString: async (parent, {name}, { DBString }) => {
      const result= await DBString.findOne({'name': name});

      return result;
    },
  },
  Mutation: {
    createDBString: async (parent, args, { DBString }) => {
      // { _id: 123123, name: "whatever"}
      const result = await new DBString(args).save();
      result._id = result._id.toString();
      return result;
    },
  removeDBString: async (parent, {name}, { DBString }) => {
    var result= await DBString.remove(DBString.findOne({'name': name}));
    const DBStrings = await DBString.find();
    return DBStrings.map((x) => {
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


const DBString = mongoose.model('DBString', { name: String });
// Some fake data

// The GraphQL schema in string form


// The resolvers


// Put together a schema
mongoose.connect('mongodb://dbuser:cabedi1@ds127490.mlab.com:27490/ctestdb');


// Initialize the app
const app = express();

app.use(cors());
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context:{DBString} }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


// Start the server
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
