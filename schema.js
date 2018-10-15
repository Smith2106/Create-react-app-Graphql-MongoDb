const typeDefs = `
<<<<<<< HEAD
type DBString {
=======
type Cat {
>>>>>>> fcfb1637658a3618eb6257e278f64b308470e65a
  _id: String!
  name: String!
}
type Query {
<<<<<<< HEAD
  allStorage: [DBString!]!
  oneDBString(name: String!): DBString!
}
type Mutation {
  createDBString(name: String!): DBString!
  removeDBString(name: String!): [DBString!]!
=======
  allCats: [Cat!]!
  oneCat(name: String!): Cat!
}
type Mutation {
  createCat(name: String!): Cat!
  removeCat(name: String!): [Cat!]!
>>>>>>> fcfb1637658a3618eb6257e278f64b308470e65a

}
`;

module.exports = typeDefs;