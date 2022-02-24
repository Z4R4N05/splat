const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
  }

  type Palette {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    palettes(username: String): [Palette]
    palette(_id: ID!): Palette
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPalette(paletteText: Palette!): Palette
    addComment(paletteId: ID!, commentBody: String!): Palette
  }
`;

module.exports = typeDefs;
