const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    login: String!
    avatar_url: String
  }

  "Entry point"
  type Query {
    getUser: [User!]!
  }
`;

module.exports = typeDefs;
