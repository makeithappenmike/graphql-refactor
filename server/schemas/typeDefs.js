const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBook: [Books]!
    }

    type Book {
        bookId: Int
        authors: [Authors]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        profile: User
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
        me: Profile
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook([Authors], description: String!, title: String!, bookId: Int!, image: String!, link: String!): User
        removeBook(bookId: Int): User
    }
`;

module.exports = typeDefs;
