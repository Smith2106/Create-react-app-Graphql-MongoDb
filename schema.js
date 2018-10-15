<<<<<<< HEAD
export default `
type DBString{
=======
const typeDefs = `
type Cat {
>>>>>>> Refactor schema to be in separate file from server.js
  _id: String!
  name: String!
}
type Query {
<<<<<<< HEAD
  allDBStrings: [DBString!]!
}
type Mutation {
  createDBString(name: String!): DBString!
=======
  allCats: [Cat!]!
  oneCat(name: String!): Cat!
}
type Mutation {
  createCat(name: String!): Cat!
  removeCat(name: String!): [Cat!]!

>>>>>>> Refactor schema to be in separate file from server.js
}
`;

module.exports = typeDefs;