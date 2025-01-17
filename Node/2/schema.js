const { gql } = require("apollo-server-express");
const typeDefs = gql`
type Query {
hello: String,
user (id: ID!): User
}

type User{
id: ID!
name: String!
age: Int!
}
`;

const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL",
    user: (_, { id }) => {
      // Mock user data
      const users = [
        { id: "1", name: "Alice", age: 25 },
        { id: "2", name: "Bob", age: 30 },
      ];
      let ans = users.find((user) => user.id == id);
      return ans
    },
  },
};

module.exports = { typeDefs, resolvers };
