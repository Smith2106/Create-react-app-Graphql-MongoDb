export default `
type DBString{
  _id: String!
  name: String!
}
type Query {
  allDBStrings: [DBString!]!
}
type Mutation {
  createDBString(name: String!): DBString!
}
`;
