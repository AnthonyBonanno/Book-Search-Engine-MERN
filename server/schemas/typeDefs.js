const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    me: User
  }

  input SaveBookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: ID!
    image: String
    link: String
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(saveBook: SaveBookInput!): User
    removeBook(bookId: String!): User
  }`;

module.exports = typeDefs;
