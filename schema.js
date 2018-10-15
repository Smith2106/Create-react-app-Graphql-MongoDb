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

module.exports = typeDefs;