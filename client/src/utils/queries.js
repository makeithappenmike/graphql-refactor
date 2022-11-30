import { gql } from '@apollo/client';

export const GET_ME = gql`
  query user {
    user {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBook: String
    }
  }
`;
